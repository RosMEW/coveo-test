import React, { useMemo } from 'react';
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
    const currentPage = useSelector(
        (state: state) => state.search.query.currentPage
    );
    const dispatch = useDispatch();

    let pageCount = useMemo(() => {
        // There is currently a bug on the actual total number of results
        const total = Math.min(totalResults, 1000);
        return Math.floor(total / resultPerPage);
    }, [totalResults, resultPerPage]);

    const pageClickHandler = ({ selected }: { selected: number }) => {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_PAGE,
            currentPage: selected
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
            forcePage={currentPage}
        />
    );
};

export default Pagination;
