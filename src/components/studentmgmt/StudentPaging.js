import React from "react";
import Pagination from "react-js-pagination";
import { PagiWrap } from "../../styles/PagingStyle";
import { PortfolioPagingSty } from "../../styles/portfoliopagingstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { StudentPageAtom } from "./StudentMain";
import { useRecoilState } from "recoil";

const StudentPaging = ({ page, setPage, count }) => {
  const [pageState, setPageState] = useRecoilState(StudentPageAtom);

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
        onChange={
          // setPage
          (selectedPage) => setPageState((prev) => ({ ...prev, page: selectedPage }))
        }
      />
    </PortfolioPagingSty>
  );
};

export default StudentPaging;
