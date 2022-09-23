import React from 'react';
import classnames from 'classnames';

// icons
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

// hooks
import usePagination from '../hooks/usePagination';
import { DOTS } from '../hooks/usePagination';

const Pagination = ({ className, currentPage, totalCount, onPageChange, siblingCount }) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
    });

    if (currentPage === 0 || paginationRange < 2) {
        return null;
    }

    // handle on first page
    const onFirst = () => {
        onPageChange(currentPage = 1);
    }

    // handle on last page
    const onLast = () => {
        onPageChange(currentPage = totalCount);
    }

    // handle on previous page
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    // handle on next page
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <ul className={classnames('pagination-container', { [className]: className })}>
            <li
                className={classnames('pagination-item', { disabled: currentPage === 1 })}
                onClick={onFirst}
            >
                <AiOutlineDoubleLeft className='arrow' />
            </li>
            <li
                className={classnames('pagination-item', { disabled: currentPage === 1 })}
                onClick={onPrevious}
            >
                <AiOutlineLeft className='arrow' />
            </li>
            {(paginationRange || []).map((pageNumber, index) => {
                return (
                    <React.Fragment key={index}>
                        {pageNumber === DOTS ? (
                            <li className='pagination-item dots'>
                                <BsThreeDots />
                            </li>
                        ) : (
                            <li
                                className={classnames('pagination-item', { selected: pageNumber === currentPage })}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </li>
                        )}
                    </React.Fragment>
                )
            })}
            <li
                className={classnames('pagination-item', { disabled: currentPage === totalCount })}
                onClick={onNext}
            >
                <AiOutlineRight className='arrow' />
            </li>
            <li
                className={classnames('pagination-item', { disabled: currentPage === totalCount })}
                onClick={onLast}
            >
                <AiOutlineDoubleRight className='arrow' />
            </li>
        </ul>
    );
};

export default Pagination;
