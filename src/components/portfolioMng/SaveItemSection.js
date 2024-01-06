import React, { useEffect, useState } from "react";
import { getBigcate, getPortFolioList, getSavedPFList } from "../../api/portfolioAxios";
import PFsearch from "./PFsearch";
import SaveItemContent from "./SaveItemContent";
import PortfolioPaging from "./PortfolioPaging";

const SaveItemSection = () => {
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [category, setCategory] = useState([]);
  const [selectCate, setSelectCate] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [savedPFList, setSavedPFList] = useState("");

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    console.log("필터변경e", e.target.value);
    setSelectCate(e.target.value);
  };
  // 쿼리 주소를 변환하자
  const makeUrl = () => {
    let query = "";

    if (selectCate !== "") {
      query += `iclassfication=${selectCate}&`;
    }
    if (searchsubj !== "") {
      query += `subjectName=${searchsubj}&`;
    }
    if (searchname !== "") {
      query += `studentName=${searchname}&`;
    }
    query = query ? query.slice(0, -1) : "";
    return query;
  };

  // 검색버튼 클릭
  const handleSearchClick = async () => {
    try {
      await setPage(1);
      const query = makeUrl();
      console.log("query?", query);
      const data = await getSavedPFList({
        setSavedPFList,
        page,
        setCount,
        query,
      });
      setSavedPFList(data);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    getBigcate(setCategory);
    getSavedPFList({ setSavedPFList, page, setCount });
  }, [page]);
  console.log("카테정보 어떻게 들어오니", category);
  console.log("무슨카테 선택했니", selectCate);

  return (
    <div>
      <PFsearch
        searchsubj={searchsubj}
        setSearchSubj={setSearchSubj}
        searchname={searchname}
        setSearchname={setSearchname}
        selectCate={selectCate}
        category={category}
        handleSearchClick={handleSearchClick}
        handleCategoryFilter={handleCategoryFilter}
      />
      {/* {studentPFList.res.length > 0 ? ( */}
      <SaveItemContent savedPFList={savedPFList} />
      {/* ) : (
        // 데이터 없을 때 뜨는 화면
        <NothingData>
          <p>데이터가 없어요 （；´д｀）ゞ</p>
        </NothingData>
      )} */}
      <PortfolioPaging page={page} setPage={setPage} count={count} />
    </div>
  );
};

export default SaveItemSection;
