import React, { useEffect, useState } from "react";
import ManagerBox from "../components/jobMng/ManagerBox";
import { JobManagerWrap } from "../styles/JobmanagerStyle";
import ManagerAdd from "../components/jobMng/ManagerAdd";
import InputModal from "../components/InputModal";
import { getJobManagerInfo } from "../api/jobMngAxiois";
import { BtnGlobal } from "../styles/GlobalStyle";

const JobManager = () => {
  const [mngProflieData, setmngProflieData] = useState([]);
  const [modalOpen, setAddModalOpen] = useState(false);

  const openModal = () => {
    setAddModalOpen(true);
  };
  const closeModal = () => {
    setAddModalOpen(false);
  };

  useEffect(() => {
    // 취업담당자 정보 get
    getJobManagerInfo(setmngProflieData);
  }, []);

  return (
    <JobManagerWrap>
      <div className="job-title">
        <h3>취업 담당자 관리</h3>
      </div>
      <div className="job-content-wrap">
        <div>
          <ManagerBox
            mngProflieData={mngProflieData}
            setmngProflieData={setmngProflieData}
          />
        </div>
        <div className="maganer-add">
          <BtnGlobal onClick={openModal}>등록</BtnGlobal>
          <InputModal
            open={modalOpen}
            close={closeModal}
            header="취업 담당자 등록"
          >
            <ManagerAdd setAddModalOpen={setAddModalOpen}        mngProflieData={mngProflieData}
            setmngProflieData={setmngProflieData}/>
          </InputModal>
        </div>
      </div>
    </JobManagerWrap>
  );
};

export default JobManager;
