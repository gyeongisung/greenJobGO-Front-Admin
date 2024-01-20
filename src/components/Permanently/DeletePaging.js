import React from "react";
import { PagiWrap } from "../../styles/PagingStyle";
import Pagination from "react-js-pagination";
import { PortfolioPagingSty } from "../../styles/portfoliopagingstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const DeletePaging = ({ page, setPage, count }) => {
  return (
    <PortfolioPagingSty style={{ marginTop: "20px" }}>
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

export default DeletePaging;
