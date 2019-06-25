import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';

import { newSearch } from './store/actions/searchAction';
import { state, querySearchParams, querySelection } from './shared/types';
import { queryStringify } from './helpers/utils';
import * as actionTypes from './store/actions/actionTypes';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const query = useSelector((state: state) => state.search.query);
    const termSelected = useSelector(
        (state: state) => state.selection.termSelected
    );

    useEffect(() => {
        const querySearchParams: querySearchParams = {
            q: query.searchTerm,
            aq: queryStringify(query.selection),
            sortCriteria: query.sortOrder,
            sortField: query.sortField,
            numberOfResults: query.resultPerPage,
            firstResult: query.firstResult
        };
        dispatch(newSearch(querySearchParams));
    }, [query]);

    useEffect(() => {
        const selection = termSelected.reduce(
            (acc, term) => {
                if (!acc[term.field]) acc[term.field] = [];
                acc[term.field].push(term.value);
                return acc;
            },
            {} as querySelection
        );
        dispatch({ type: actionTypes.UPDATE_SELECTION, selection });
    }, [termSelected]);

    return (
        <div>
            <Header />
            <Nav />
            <Main />
        </div>
    );
};

export default App;
