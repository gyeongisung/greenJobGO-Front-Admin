import React from "react";
import Pagination from "react-js-pagination";
import { PagiWrap } from "../../styles/PagingStyle";

const StudentPaging = ({ page, setPage, count }) => {
  return (
    <PagiWrap>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage}
      />
    </PagiWrap>
  );
};

export default StudentPaging;
