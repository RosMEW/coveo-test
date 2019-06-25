import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { state } from '../../shared/types';
import * as actionTypes from '../../store/actions/actionTypes';
import './Pagination.scss';

const Pagination = () => {
    const resultPerPage = useSelector(
        (state: state) => state.search.query.resultPerPage
    );
    const totalResults = useSelector((state: state) => state.search.total);
    const dispatch = useDispatch();

    let pageCount = Math.ceil(totalResults / resultPerPage);
    useEffect(() => {
        pageCount = Math.ceil(totalResults / resultPerPage);
    }, [resultPerPage]);

    const pageClickHandler = ({ selected }: { selected: number }) => {
        dispatch({
            type: actionTypes.UPDATE_FIRST_RESULT_DISPLAY,
            firstResult: Math.ceil(selected * resultPerPage)
        });
        window.scrollTo(0, 0);
    };

    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageClickHandler}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    );
};

export default Pagination;
