import { PagiWrap } from "../../styles/PagingStyle";
import Pagination from "react-js-pagination";

const SaveItemPaging = ({ page, setPage, count }) => {
  console.log("보관함 페이지네이션")
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

export default SaveItemPaging;
