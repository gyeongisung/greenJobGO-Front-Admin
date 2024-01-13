import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { v4 } from "uuid";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSavedPFList, patchSendMain } from "../../api/portfolioAxios";

// 텍스트 저장 recoil
export const clickMainRecoil = atom({
  key: `clickMainRecoil/${v4()}`,
  default: [],
});

const SaveItemCheckbox = ({ item, handleSaveCancel }) => {
  // 페이지 recoil
  const [clickItems, setClickItems] = useRecoilState(clickMainRecoil);

  // 체크박스 변경 이벤트 핸들러
  const handleCheckBox = (checked, istudent) => {
    setClickItems(prev =>
      checked ? [...prev, istudent] : prev.filter(item => item !== istudent),
    );

    if (!checked) {
      const query = `istudent=${istudent}`
      patchSendMain({ query, mainYn: 0 });
    }
  };

  useEffect(() => {
    setClickItems(prev => []);
    getSavedPFList({ setClickItems });
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
    </div>
  );
};

export default SaveItemCheckbox;
