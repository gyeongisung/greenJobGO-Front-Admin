import React, { useEffect, useState } from "react";
import { GoMainBtnSty, PfSearchWrap } from "../../styles/PortfolioStyle";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { getBigcate, patchSendMain } from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";
import {  useRecoilValue } from "recoil";
import { readsavedListItems } from "./SaveItemContent";
import ErrorModal from "../ErrorModal";

const SaveItemSearch = ({
  selectCate,
  setSelectCate,
  searchsubj,
  setSearchSubj,
  searchname,
  setSearchname,
  handleSearchClick,
  fetchData,
  clickItems,
  setClickItems,
  setErrorApiInfo,
}) => {
  const [category, setCategory] = useState([]);

  const [mainGoModalOpen, setMainGoModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const [mainYn, setMainYn] = useState(1);

  const [errorInfo, setErrorInfo] = useState("");
  const savedListRead = useRecoilValue(readsavedListItems);

  const handleCategoryFilter = e => {
    console.log("필터변경e", e.target.value);
    setSelectCate(e.target.value);
    setSearchSubj("");
    setSearchname("");
  };

  // 메인 포트폴리오 적용 버튼 클릭
  const handleGoMain = () => {
    if (clickItems.length === 0) {
      setErrorInfo("메인 포트폴리오를 선택하세요.");
      return;
    } else {
      setMainGoModalOpen(true);
    }
  };
  // 메인적용 확인
  const handleMainConfirm = async () => {
    try {
      patchSendMain({
        clickItems,
        mainYn: 1,
        setErrorInfo,
      });
      await setMainGoModalOpen(false);
      // setPage(1);
    } catch (error) {
      console.log("보관실패", error);
    }
  };

  // 에러나서 취소될때 ok버튼
  const handleErrorOK = () => {
    setErrorModalOpen(false);
    setErrorInfo("");
    fetchData();
  };
  const handleCancel = () => {
    setClickItems([]);
    setMainGoModalOpen(false);
  };
  useEffect(() => {
    getBigcate(setCategory, setErrorApiInfo);
  }, []);

  useEffect(() => {
    if (errorInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorInfo]);

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
                선택
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
            <BtnGlobal
              onClick={handleSearchClick}
              style={{ background: "#6d6d6d" }}
            >
              조회
            </BtnGlobal>
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
          close={handleCancel}
          onConfirm={handleMainConfirm}
          onCancel={handleCancel}
        >
          <span>메인 포트폴리오로 설정 하시겠습니까?</span>
        </ConfirmModal>
      )}
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <ErrorModal
          open={errorModalOpen}
          close={handleErrorOK}
          onConfirm={handleErrorOK}
        >
          <span>{errorInfo}</span>
        </ErrorModal>
      )}
    </div>
  );
};

export default SaveItemSearch;
