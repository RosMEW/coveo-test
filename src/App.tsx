import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { get } from 'lodash';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import QuickSearch from './QuickSearch/QuickSearch';

import { newSearch } from './store/actions/searchAction';
import { state, querySearchParams, querySelection } from './shared/types';
import { queryStringify } from './helpers/utils';
import * as actionTypes from './store/actions/actionTypes';

const App: React.FC = () => {
    const [showQuickSearch, setShowQuickSearch] = useState(false);
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
            firstResult: query.currentPage * query.resultPerPage
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

    useEffect(() => {
        window.addEventListener('keydown', event => {
            // press S to open QuickSearch
            if (
                event.keyCode === 83 &&
                get(event, 'target.nodeName') !== 'INPUT'
            )
                setShowQuickSearch(true);
            // press Esc to close QuickSearch
            if (event.keyCode === 27) setShowQuickSearch(false);
        });
    }, []);

    return (
        <div>
            <Header />
            <CSSTransition
                in={showQuickSearch}
                timeout={300}
                unmountOnExit
                mountOnEnter
                classNames='quick-search'>
                <QuickSearch onClick={() => setShowQuickSearch(false)} />
            </CSSTransition>
            <Nav />
            <Main />
        </div>
    );
};

export default App;
