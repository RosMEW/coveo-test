import { newSearch } from './searchAction';
import * as actionTypes from '../actions/actionTypes';

describe('newSearch', () => {
    it('should call dispatch three times', async () => {
        const dispatch = jest.fn();
        await newSearch({} as any)(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenCalledWith({
            type: actionTypes.SEARCH_START
        });

        // dispatch.mock.calls - how many times dispatch have been called
        // dispatch.mock.calls[1] - second dispatch call
        // dispatch.mock.calls[1][0] - first argument
        expect(dispatch.mock.calls[1][0].type).toEqual(
            actionTypes.SEARCH_SUCCESS
        );
        expect(dispatch.mock.calls[2][0].type).toEqual(
            actionTypes.UPDATE_GROUP_BY
        );
    });
});
