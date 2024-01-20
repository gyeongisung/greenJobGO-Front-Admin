import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PagiWrap } from "../../styles/PagingStyle";
import Pagination from "react-js-pagination";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { PortfolioPagingSty } from "../../styles/portfoliopagingstyle";

const Paging = ({ page, setPage, count }) => {
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

export default Paging;
