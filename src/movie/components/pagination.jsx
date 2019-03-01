import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ count, pageSize, currentPage, changePage }) => {
  const countPages = Math.ceil(count / pageSize);
  if (countPages === 1) return null;
  let pages = new Array(countPages);
  for (let i = 0; i < pages.length; i++) pages[i] = i + 1;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => changePage(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
};

export default Pagination;
