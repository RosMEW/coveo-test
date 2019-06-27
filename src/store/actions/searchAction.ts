import { DispatchProp } from 'react-redux';
import axios from '../../helpers/axiosInstance';
import { groupByQuery } from '../../helpers/groupByQuery';

import { searchReponse, querySearchParams } from '../../shared/types';
import * as actionTypes from './actionTypes';

export const newSearch = (query: querySearchParams) => {
    return (dispatch: DispatchProp['dispatch']) => {
        dispatch({ type: actionTypes.SEARCH_START });

        // use POST instead of GET to include GROUPBY property
        return axios
            .post('/search', { ...query, groupBy: groupByQuery })
            .then(res => {
                const searchReponse: searchReponse = res.data;
                dispatch({
                    type: actionTypes.SEARCH_SUCCESS,
                    results: searchReponse.results,
                    total: searchReponse.totalCountFiltered
                });
                dispatch({
                    type: actionTypes.UPDATE_GROUP_BY,
                    groupBy: searchReponse.groupByResults
                });
            })
            .catch(err => dispatch({ type: actionTypes.SEARCH_FAIL }));
    };
};
