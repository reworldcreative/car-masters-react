import React from "react";
import "./pagination.scss";

export default function Paginatin({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* <p className="visibility-hidden">pagination</p> */}
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              "pagination__item " + `${currentPage === number ? "active" : ""}`
            }
          >
            <button
              className="pagination__button"
              onClick={() => onPageChange(number)}
              aria-label={
                "Pagination button. Page number" +
                number +
                `${currentPage === number ? "active" : "inactive"}`
              }
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
}
