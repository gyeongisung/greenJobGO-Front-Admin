import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { v4 } from "uuid";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { patchCancelMain, patchSendMain } from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";
import OkModal from "../OkModal";

// 텍스트 저장 recoil
// export const clickMainRecoil = atom({
//   key: `clickMainRecoil/${v4()}`,
//   default: [],
// });

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

  // 체크박스 변경 이벤트 핸들러
  const handleCheckBox = (checked, istudent) => {
    setClickItems(prev => {
      if (!checked) {
        const query = `istudent=${istudent}`;
        setCancelMakeQuery(query);
      }

      return checked
        ? [...prev, istudent]
        : prev.filter(item => item !== istudent);
    });
  };
  // 메인취소하기 모달 취소 클릭
  const handleCancelReject = () => {
    setClickItems([]);
    setMainCancelModalOpen(false);
  };

  //  메인취소 확인
  const handleMainCancelConfirm = async () => {
    try {
      await patchCancelMain({
        query: cancelMakeQuery,
        mainYn: 0,
        setErrorCancelInfo,
        setClickItems,
      });
      await setMainCancelModalOpen(false);
      setErrorModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cancelMakeQuery) {
      setMainCancelModalOpen(true);
    }
  }, [cancelMakeQuery]);

  useEffect(() => {
    if (errorCancelInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorCancelInfo]);

  useEffect(() => {
    setClickItems(prev => []);
  }, []);

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
        <li className="pf-name">{item.studentName} 수강생</li>
        <li className="pf-subject">{item.subjectName}</li>
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
            fetchData();
          }}
          onConfirm={() => {
            setErrorModalOpen(false);
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
