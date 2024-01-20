import { PagiWrap } from "../../styles/PagingStyle";
import Pagination from "react-js-pagination";
import { PortfolioPagingSty } from "../../styles/portfoliopagingstyle";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClassPaging = ({ page, setPage, count }) => {
  console.log(page);
  console.log(count);
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

export default ClassPaging;
