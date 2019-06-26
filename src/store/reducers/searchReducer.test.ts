import { searchReducer } from './searchReducer';
import * as actionTypes from '../actions/actionTypes';

const state = {
    query: {
        searchTerm: '',
        selection: {},
        sortOrder: '',
        sortField: '',
        resultPerPage: 12,
        currentPage: 0
    },
    results: [],
    total: 0,
    loading: false,
    error: false
};

describe('searchReducer', () => {
    it(actionTypes.SEARCH_START, () => {
        const newState = searchReducer(state, {
            type: actionTypes.SEARCH_START
        });
        expect(newState.loading).toBeTruthy();
        expect(newState.error).toBeFalsy();
    });

    it(actionTypes.SEARCH_SUCCESS, () => {
        const newState = searchReducer(state, {
            type: actionTypes.SEARCH_SUCCESS,
            results: [],
            total: 0
        });
        expect(newState.loading).toBeFalsy();
        expect(newState.results).toEqual([]);
        expect(newState.total).toEqual(0);
    });

    it(actionTypes.SEARCH_FAIL, () => {
        const newState = searchReducer(state, {
            type: actionTypes.SEARCH_FAIL
        });
        expect(newState.loading).toBeFalsy();
        expect(newState.error).toBeTruthy();
    });

    it(actionTypes.UPDATE_SEARCH_TERM, () => {
        const newState = searchReducer(state, {
            type: actionTypes.UPDATE_SEARCH_TERM,
            searchTerm: 'value'
        });
        expect(newState.query.searchTerm).toEqual('value');
        expect(newState.query.currentPage).toEqual(0);
    });

    it(actionTypes.UPDATE_SELECTION, () => {
        const newState = searchReducer(state, {
            type: actionTypes.UPDATE_SELECTION,
            selection: { field: ['value'] }
        });
        expect(newState.query.selection).toEqual({ field: ['value'] });
        expect(newState.query.currentPage).toEqual(0);
    });

    it(actionTypes.SORT_RESULTS, () => {
        const newState = searchReducer(state, {
            type: actionTypes.SORT_RESULTS,
            sortField: 'tpprixnum',
            sortOrder: 'fieldascending'
        });
        expect(newState.query.sortField).toEqual('tpprixnum');
        expect(newState.query.sortOrder).toEqual('fieldascending');
        expect(newState.query.currentPage).toEqual(0);
    });

    it(actionTypes.UPDATE_RESULTS_PER_PAGE, () => {
        const newState = searchReducer(state, {
            type: actionTypes.UPDATE_RESULTS_PER_PAGE,
            resultPerPage: 24
        });
        expect(newState.query.resultPerPage).toEqual(24);
        expect(newState.query.currentPage).toEqual(0);
    });

    it(actionTypes.UPDATE_CURRENT_PAGE, () => {
        const newState = searchReducer(state, {
            type: actionTypes.UPDATE_CURRENT_PAGE,
            currentPage: 2
        });
        expect(newState.query.currentPage).toEqual(2);
    });

    it('should do nothing', () => {
        const newState = searchReducer(state, {
            type: ''
        });
        expect(newState).toBe(state);
    });
});
