import { groupByResult, termSelected } from '../../shared/types';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    termSelected: [] as termSelected[],
    groupBy: []
};

type selectionAction = {
    type: string;
    groupBy: groupByResult[];
    field: string;
    value: string;
    text?: string;
};

export const selectionReducer = (
    state = initialState,
    action: selectionAction
) => {
    switch (action.type) {
        case actionTypes.UPDATE_GROUP_BY:
            return {
                ...state,
                groupBy: action.groupBy
            };

        case actionTypes.ADD_TERM:
            const found = state.termSelected.find(
                (term: termSelected) =>
                    term.field === action.field && term.value === action.value
            );
            if (found) return state;

            return {
                ...state,
                termSelected: state.termSelected.concat({
                    field: action.field,
                    value: action.value,
                    text: action.text
                })
            };

        case actionTypes.ADD_PRICE_TERM:
            const termSelected = state.termSelected.filter(
                term => term.field !== action.field
            );

            return {
                ...state,
                termSelected: termSelected.concat({
                    field: action.field,
                    value: action.value,
                    text: action.text
                })
            };

        case actionTypes.REMOVE_TERM:
            return {
                ...state,
                termSelected: state.termSelected.filter(
                    term =>
                        term.field !== action.field ||
                        term.value !== action.value
                )
            };
        case actionTypes.REMOVE_ALL_TERMS:
            return {
                ...state,
                termSelected: []
            };

        default:
            return state;
    }
};
