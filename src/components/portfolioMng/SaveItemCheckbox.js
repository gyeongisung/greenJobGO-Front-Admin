import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { v4 } from "uuid";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { patchSendMain } from "../../api/portfolioAxios";
import ConfirmModal from "../ConfirmModal";

// 텍스트 저장 recoil
export const clickMainRecoil = atom({
  key: `clickMainRecoil/${v4()}`,
  default: [],
});

const SaveItemCheckbox = ({ item, handleSaveCancel, updateData }) => {
  const [mainCancelModalOpen, setMainCancelModalOpen] = useState(false);
  const [mainYn, setMainYn] = useState(0);
  const [makeQuery, setMakeQuery] = useState("");
  const [cancelMakeQuery, setCancelMakeQuery] = useState("");

  // 메인클릭 recoil
  const [clickItems, setClickItems] = useRecoilState(clickMainRecoil);

  // 체크박스 변경 이벤트 핸들러
  const handleCheckBox = (checked, istudent) => {
    setClickItems(prev =>
      checked ? [...prev, istudent] : prev.filter(item => item !== istudent),
    );

    if (!checked) {
      const query = `istudent=${istudent}`;
      setCancelMakeQuery(query);

      // patchSendMain({ query, mainYn: 0 });
    }
  };

  // const handleMainDim = async e => {
  //   console.log("Dim eee", e);
  //   setMainCancelModalOpen(true);
  //   const query = `istudent=${e}`;
  //   setMakeQuery(query);
  // };

  //  메인취소
  const handleMainCancelConfirm = async () => {
    try {
      await patchSendMain({ query: cancelMakeQuery, mainYn: 0 });
      await updateData();
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
    setClickItems(prev => []);
    // getSavedPFList({ savePage, setClickItems });
  }, []);
  return (
    <div className="Saved-infoWrap">
      <ul className="main-checked">
        <li>
          {/* <input
            type="checkbox"
            id={`check${v4()}`}
            value={item.istudent}
            defaultChecked={clickItems.includes(item.istudent)}
            onChange={e => {
              handleCheckBox(e.target.checked, item.istudent);
            }}
          /> */}
          <input
            type="checkbox"
            id={`check${v4()}`}
            value={item.istudent}
            defaultChecked={
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
          close={() => setMainCancelModalOpen(false)}
          onConfirm={handleMainCancelConfirm}
          onCancel={() => setMainCancelModalOpen(false)}
        >
          <span>메인 포트폴리오 설정을 취소 하시겠습니까?</span>
        </ConfirmModal>
      )}
    </div>
  );
};

export default React.memo(SaveItemCheckbox);
