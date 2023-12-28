import { PagiWrap } from "../styles/PagingStyle";
import Pagination from "react-js-pagination";

const Paging = ({ page, setPage, count }) => {
  return (
    <PagiWrap>
      <Pagination
        activePage={page}
        itemsCountPerPage={16}
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

export default Paging;
