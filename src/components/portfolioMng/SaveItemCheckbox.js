import React, { useEffect, useState } from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { patchCancelMain, patchSendMain } from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";
import OkModal from "../OkModal";
import { useNavigate } from "react-router";

const SaveItemCheckbox = ({
  item,
  handleSaveCancel,
  fetchData,
  clickItems,
  setClickItems,
}) => {
  const [mainCancelModalOpen, setMainCancelModalOpen] = useState(false);
  const [cancelMakeQuery, setCancelMakeQuery] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorCancelInfo, setErrorCancelInfo] = useState("");
  const navigate = useNavigate();

  // 체크박스 변경 이벤트 핸들러
  const handleCheckBox = (checked, istudent) => {
    setClickItems(prev => {
      if (!checked && item.companyMainYn === 1) {
        const query = `istudent=${istudent}`;
        setCancelMakeQuery(query);
      }
      return checked
        ? [...prev, istudent]
        : prev.filter(item => item !== istudent);
    });
  };
  // 메인적용취소 모달 취소버튼 클릭
  const handleCancelReject = async () => {
    // await setClickItems(prev => []);
    setCancelMakeQuery("");
    setMainCancelModalOpen(false);
  };

  //  메인취소 확인
  const handleMainCancelConfirm = async () => {
    try {
      await patchCancelMain({
        query: cancelMakeQuery,
        mainYn: 0,
        setErrorCancelInfo,
      });
      await setMainCancelModalOpen(false);
      fetchData();
      // setErrorModalOpen(true);
    } catch (error) {
      // console.log("데이터가 처리되지 않았습니다", error);
    }
  };

  // 메인취소모달
  const openMainCancelModal = () => {
    setMainCancelModalOpen(true);
  };

  const handleUserDetailMove = () => {
    navigate(`/admin/student/${item.istudent}`);
  };

  useEffect(() => {
    if (cancelMakeQuery) {
      openMainCancelModal();
    }
  }, [cancelMakeQuery]);

  useEffect(() => {
    if (errorCancelInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorCancelInfo]);

  // useEffect(() => {
  //   setClickItems(prev => []);
  // }, []);

  return (
    <div className="Saved-infoWrap">
      <ul className="main-checked">
        <li>
          <input
            type="checkbox"
            id={`check${item.istudent}`}
            value={item.istudent}
            checked={
              item.companyMainYn === 1 || clickItems.includes(item.istudent)
            }
            onChange={e => {
              handleCheckBox(e.target.checked, item.istudent);
            }}
          />
        </li>
      </ul>
      <ul className="side-info">
        <li className="pf-name" onClick={handleUserDetailMove}>
          {item.studentName} 수강생
        </li>
        <li className="pf-subject" onClick={handleUserDetailMove}>
          {item.subjectName}
        </li>
        {item.storageYn === 1 ? (
          <li
            className="isSaved-name-right"
            onClick={() => handleSaveCancel(item.istudent)}
          >
            <FontAwesomeIcon icon={solidHeart} />
          </li>
        ) : null}
      </ul>
      {/* 메인취소모달 */}
      {mainCancelModalOpen && (
        <ConfirmModal
          open={mainCancelModalOpen}
          close={handleCancelReject}
          onConfirm={handleMainCancelConfirm}
          onCancel={handleCancelReject}
        >
          <span>메인 포트폴리오 설정을 취소 하시겠습니까?</span>
        </ConfirmModal>
      )}
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false);
            setErrorCancelInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false);
            setErrorCancelInfo("");
            fetchData();
          }}
        >
          <span>{errorCancelInfo}</span>
        </OkModal>
      )}
    </div>
  );
};

export default React.memo(SaveItemCheckbox);
