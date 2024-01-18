import React, { useEffect, useState } from "react";
import { GoMainBtnSty, PfSearchWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { v4 } from "uuid";
import {
  getBigcate,
  patchSendMain,
} from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";
import { selector, useRecoilValue } from "recoil";
import { clickMainRecoil } from "./SaveItemCheckbox";

// 클릭한 포트폴리오 읽자
export const readClickItems = selector({
  key: `/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(clickMainRecoil);
    return result;
  },
});

const SaveItemSearch = ({
  setPage,
  selectCate,
  setSelectCate,
  searchsubj,
  setSearchSubj,
  searchname,
  setSearchname,
  handleSearchClick,
  fetchData
}) => {
  const [category, setCategory] = useState([]);

  const [mainGoModalOpen, setMainGoModalOpen] = useState(false);
  const [mainYn, setMainYn] = useState(1);

  // recoil mainClick read
  const mainList = useRecoilValue(readClickItems);
  // recoil page read

  // 보관함 리스트 recoil
  // const [savedPFList, setSavedPFList] = useRecoilState(savedListRecoil);

  // 카테변경값 저장
  const handleCategoryFilter = e => {
    console.log("필터변경e", e.target.value);
    setSelectCate(e.target.value);
    setSearchSubj("")
    setSearchname("")

  };

  // 선택된 메인포트폴리오 정보를 불러오자
  const makeQuery = () => {
    const queryString = mainList.map(item => `istudent=${item}`).join("&");
    return queryString;
  };

  // 메인 포트폴리오 적용 버튼 클릭
  const handleGoMain = () => {
    setMainGoModalOpen(true);
  };
  // 메인적용 확인
  const handleMainConfirm = async () => {
    try {
      // await setPage(1);
      const query = makeQuery();
      let update = 1;
      await setMainYn(update);
      await patchSendMain({ query, mainYn });
      await fetchData();
      setMainGoModalOpen(false);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  useEffect(() => {
    getBigcate(setCategory);
  }, []);
  return (
    <div>
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
                <option
                  key={`cate${item.iclassification}`}
                  value={item.iclassification}
                >
                  {item.classification}
                </option>
              ))}
            </select>
          </li>
          <li>
            <div className="subjectname-form">
              <label htmlFor="subject-state-save">과정명</label>
              <input
                type="text"
                id="subject-state-save"
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
              <label htmlFor="student-state-save">수강생 이름</label>
              <input
                type="text"
                id="student-state-save"
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
      <GoMainBtnSty>
        <BtnGlobal className="GoMainGo" onClick={handleGoMain}>
          메인 포트폴리오 적용
        </BtnGlobal>
      </GoMainBtnSty>
      {/* 메인설정확인 모달 */}
      {mainGoModalOpen && (
        <ConfirmModal
          open={mainGoModalOpen}
          close={() => setMainGoModalOpen(false)}
          onConfirm={handleMainConfirm}
          onCancel={() => setMainGoModalOpen(false)}
        >
          <span>메인 포트폴리오로 설정 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </div>
  );
};

export default SaveItemSearch
