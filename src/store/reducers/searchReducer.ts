import { Dictionary } from 'lodash';
import { product, searchState } from '../../shared/types';
import * as actionTypes from '../actions/actionTypes';

const initialState: searchState = {
    query: {
        searchTerm: '',
        selection: {},
        sortOrder: '',
        sortField: '',
        resultPerPage: 12,
        // 0 = page 1, 1 = page 2
        currentPage: 0
    },
    results: [] as product[],
    total: 0,
    loading: false,
    error: false
};

type searchAction = {
    type: string;
    searchTerm: string;
    results: product[];
    total: number;
    selection: Dictionary<string[]>;
    sortOrder: string;
    sortField?: string;
    resultPerPage: number;
    currentPage: number;
};

export const searchReducer = (state = initialState, action: searchAction) => {
    switch (action.type) {
        case actionTypes.SEARCH_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.results,
                total: action.total
            };
        case actionTypes.SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };

        case actionTypes.UPDATE_SEARCH_TERM:
            return {
                ...state,
                query: {
                    ...state.query,
                    searchTerm: action.searchTerm,
                    currentPage: 0
                }
            };
        case actionTypes.UPDATE_SELECTION:
            return {
                ...state,
                query: {
                    ...state.query,
                    selection: action.selection,
                    currentPage: 0
                }
            };

        case actionTypes.SORT_RESULTS:
            return {
                ...state,
                query: {
                    ...state.query,
                    sortField: action.sortField,
                    sortOrder: action.sortOrder,
                    currentPage: 0
                }
            };

        case actionTypes.UPDATE_RESULTS_PER_PAGE:
            return {
                ...state,
                query: {
                    ...state.query,
                    resultPerPage: action.resultPerPage,
                    currentPage: 0
                }
            };

        case actionTypes.UPDATE_CURRENT_PAGE:
            return {
                ...state,
                query: {
                    ...state.query,
                    currentPage: action.currentPage
                }
            };

        default:
            return state;
    }
};
