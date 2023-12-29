import React, { useState } from "react";
import ManagerBox from "../components/jobMng/ManagerBox";
import { JobManagerWrap } from "../styles/JobmanagerStyle";
import ManagerAdd from "../components/jobMng/ManagerAdd";
import InputModal from "../components/InputModal";

// 더미데이터
const managers = [
  {
    img: "https://via.placeholder.com/170x230",
    shortword: "여러분의 도전을 응원합니다111",
    name: "김아트",
    call: "053-422-2091",
    mobile: "010-000-0000",
    email: "green123@gmail.com",
  },
  {
    img: "https://via.placeholder.com/170x230",
    shortword: "여러분의 도전을 응원합니다222",
    name: "김그린",
    call: "053-422-2091",
    mobile: "010-000-0000",
    email: "green123@gmail.com",
  },
  {
    img: "https://via.placeholder.com/170x230",
    shortword: "여러분의 도전을 응원합니다333",
    name: "김학원",
    call: "053-422-2091",
    mobile: "010-000-0000",
    email: "green123@gmail.com",
  },
];

const JobManager = () => {
  const [mngProflieData, setmngProflieData] = useState(managers);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <JobManagerWrap>
      <h2>취업 담당자 관리</h2>
      <div className="job-content-wrap">
        <div>
          <ManagerBox mngProflieData={mngProflieData} />
        </div>
        <div className="maganer-add">
          <button onClick={openModal}>담당자 등록</button>
          <InputModal open={modalOpen} close={closeModal} header="담당자 등록">
            <ManagerAdd />
          </InputModal>
        </div>
      </div>
    </JobManagerWrap>
  );
};

export default JobManager;
