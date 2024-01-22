import React from "react";
import Pagination from "react-js-pagination";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioPagingSty } from "../../styles/portfoliopagingstyle";

const BulkPaging = ({ page, setPage, count }) => {
  return (
    <PortfolioPagingSty>
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={10}
      marginPagesDisplayed={0}
      prevPageText={<FontAwesomeIcon icon={faChevronLeft} />}
      nextPageText={<FontAwesomeIcon icon={faChevronRight} />}
      firstPageText={""}
      lastPageText={""}
      onChange={setPage}
    />
  </PortfolioPagingSty>
  );
};

export default BulkPaging;
