import React from "react";
import "bulma/css/bulma.min.css";


interface Props {
  itemsPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<Props> = ({
  itemsPerPage,
  totalUsers,
  paginate,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  
  return (
    <nav
      className="pagination is-centered paginationCustom"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pageNumber.map((number) => (
          <li key={number}>
            <a
              className="pagination-link"
              href="page#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};