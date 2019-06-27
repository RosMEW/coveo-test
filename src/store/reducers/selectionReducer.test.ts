import { selectionReducer } from './selectionReducer';
import * as actionTypes from '../actions/actionTypes';

const state = {
    termSelected: [{ field: 'field', value: 'value', text: 'text' }],
    groupBy: []
};

describe('selectionReducer', () => {
    it(actionTypes.UPDATE_GROUP_BY, () => {
        const newState = selectionReducer(state, {
            type: actionTypes.UPDATE_GROUP_BY,
            groupBy: []
        } as any);
        expect(newState.groupBy).toEqual([]);
    });

    describe(actionTypes.ADD_TERM, () => {
        it('should return state if field and value exist', () => {
            const newState = selectionReducer(state, {
                type: actionTypes.ADD_TERM,
                field: 'field',
                value: 'value'
            } as any);
            expect(newState).toBe(state);
        });

        it('should add term if value is different', () => {
            const newState = selectionReducer(state, {
                type: actionTypes.ADD_TERM,
                field: 'field',
                value: ''
            } as any);
            expect(newState.termSelected).toHaveLength(
                state.termSelected.length + 1
            );
        });

        it('should add term if field is different', () => {
            const newState = selectionReducer(state, {
                type: actionTypes.ADD_TERM,
                field: '',
                value: 'value'
            } as any);
            expect(newState.termSelected).toHaveLength(
                state.termSelected.length + 1
            );
        });
    });

    it(actionTypes.ADD_PRICE_TERM, () => {
        const newState = selectionReducer(state, {
            type: actionTypes.ADD_PRICE_TERM,
            field: 'tpprixnum',
            value: 'value',
            text: 'text'
        } as any);
        expect(newState.termSelected).toContainEqual({
            field: 'tpprixnum',
            value: 'value',
            text: 'text'
        });
    });

    describe(actionTypes.REMOVE_TERM, () => {
        it('should remove term if field and value exist', () => {
            const newState = selectionReducer(state, {
                type: actionTypes.REMOVE_TERM,
                field: 'field',
                value: 'value'
            } as any);
            expect(newState.termSelected).toHaveLength(
                state.termSelected.length - 1
            );
        });

        it('should not remove term if value is different', () => {
            const newState = selectionReducer(state, {
                type: actionTypes.REMOVE_TERM,
                field: 'field',
                value: ''
            } as any);
            expect(newState.termSelected).toHaveLength(
                state.termSelected.length
            );
        });

        it('should not remove term if field is different', () => {
            const newState = selectionReducer(state, {
                type: actionTypes.REMOVE_TERM,
                field: '',
                value: 'value'
            } as any);
            expect(newState.termSelected).toHaveLength(
                state.termSelected.length
            );
        });
    });

    it(actionTypes.REMOVE_ALL_TERMS, () => {
        const newState = selectionReducer(state, {
            type: actionTypes.REMOVE_ALL_TERMS
        } as any);
        expect(newState.termSelected).toEqual([]);
    });

    it('should do nothing', () => {
        const newState = selectionReducer(state, {
            type: ''
        } as any);
        expect(newState).toBe(state);
    });
});
