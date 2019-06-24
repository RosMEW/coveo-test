import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

const Pagination = () => {
    const resultPerPage = 10;
    const [offset, setOffset] = useState(0);

    const pageClickHandler = ({ selected }: { selected: number }) => {
        // offset - number of products previously displayed
        let offset = Math.ceil(selected * resultPerPage);
        setOffset(offset);
    };

    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageClickHandler}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    );
};

export default Pagination;
