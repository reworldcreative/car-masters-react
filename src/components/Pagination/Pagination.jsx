import React from "react";
import "./pagination.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* <p className="visibility-hidden">pagination</p> */}
      <div
        className="pagination"
        aria-live="polite"
        aria-atomic="false"
        aria-relevant="text"
      >
        {pageNumbers.map((number) => (
          <div
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
          </div>
        ))}
      </div>
    </>
  );
}
