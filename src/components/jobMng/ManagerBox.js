import React from "react";

const ManagerBox = ({ mngProflieData }) => {
  return (
    <div className="manager-wrap">
      {mngProflieData?.map((item, index) => (
        <div className="manager-profile" key={index}>
          <ul>
            <li>
              <img src={item.img} alt="job manager" />
            </li>
            <li>{item.shortword} </li>
            <li>{item.name}</li>
            <li>{item.call}</li>
            <li>{item.mobile}</li>
            <li>{item.email}</li>
          </ul>
        </div>
      ))}
      {mngProflieData && mngProflieData.length === 0 && (
        <div>취업담당자의 정보를 등록해주세요</div>
      )}
    </div>
  );
};

export default ManagerBox;
