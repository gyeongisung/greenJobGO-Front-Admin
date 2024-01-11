import React, { useCallback, useEffect, useState } from "react";
import { PfSearchWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { v4 } from "uuid";
import { getBigcate, getPortFolioList } from "../../api/portfolioAxios";

const PFsearch = ({ page, setPage, setStudentPFList, setCount }) => {
  const [searchsubj, setSearchSubj] = useState("");
  const [searchname, setSearchname] = useState("");
  const [category, setCategory] = useState([]);
  const [selectCate, setSelectCate] = useState("");

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
      const data = await getPortFolioList({
        setStudentPFList,
        page,
        setCount,
        query,
      });
      setStudentPFList(data);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    getBigcate(setCategory);
  }, []);

  return (
    <PfSearchWrap>
      <ul className="student-portfolio-search">
        <li className="select-wrap">
          <label htmlFor="category-select">직종</label>
          <select
            value={selectCate}
            id="category-select"
            onChange={e => handleCategoryFilter(e)}
          >
            <option value="" defaultValue>
              전체
            </option>
            {category?.map(item => (
              <option key={v4()} value={item.iclassification}>
                {item.classification}
              </option>
            ))}
          </select>
        </li>
        <li>
          <div className="subjectname-form">
            <label htmlFor="subject-state">과정명</label>
            <input
              type="text"
              id="subject-state"
              value={searchsubj}
              onChange={e => setSearchSubj(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
          </div>
        </li>
        <li>
          <div className="studentname-form">
            <label htmlFor="student-state">수강생 이름</label>
            <input
              type="text"
              id="student-state"
              value={searchname}
              onChange={e => setSearchname(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
            />
          </div>
        </li>
        <li>
          <BtnGlobal onClick={handleSearchClick}>조회</BtnGlobal>
        </li>
      </ul>
    </PfSearchWrap>
  );
};

export default PFsearch;
