import React, { useEffect, useState } from "react";
import ManagerBox from "../components/jobMng/ManagerBox";
import { JobManagerWrap } from "../styles/JobmanagerStyle";
import ManagerAdd from "../components/jobMng/ManagerAdd";
import InputModal from "../components/InputModal";
import { getJobManagerInfo } from "../api/jobMngAxiois";
import { BtnGlobal } from "../styles/GlobalStyle";
import OkModal from "../components/OkModal";
import ErrorModal from "../components/ErrorModal";

const JobManager = () => {
  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const [mngProflieData, setmngProflieData] = useState([]);
  const [modalOpen, setAddModalOpen] = useState(false);

  const openModal = () => {
    setAddModalOpen(true);
  };
  const closeModal = () => {
    setAddModalOpen(false);
  };
  // 변경있을때마다 자료 새로고침
  const updateData = async () => {
    try {
      const newData = await getJobManagerInfo(
        setmngProflieData,
        setErrorApiInfo,
      );
    } catch (error) {
      setErrorApiInfo(`Job Manager: ${error.message}`);
    }
  };

  useEffect(() => {
    // 취업담당자 정보 get
    updateData();
  }, []);

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  return (
    <JobManagerWrap>
      <div>
        <div className="job-title">
          <h3>취업 담당자 관리</h3>
        </div>
        <div className="job-content-wrap">
          <div>
            <ManagerBox
              mngProflieData={mngProflieData}
              setmngProflieData={setmngProflieData}
              updateData={updateData}
              setErrorApiInfo={setErrorApiInfo}
            />
          </div>
          <div className="maganer-add">
            <BtnGlobal onClick={openModal}>등록</BtnGlobal>
          </div>
        </div>
      </div>
      {modalOpen && (
        <InputModal
          open={modalOpen}
          close={closeModal}
          header="취업 담당자 등록"
        >
          <ManagerAdd
            setAddModalOpen={setAddModalOpen}
            updateData={updateData}
            setErrorApiInfo={setErrorApiInfo}
          />
        </InputModal>
      )}
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false);
            setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </JobManagerWrap>
  );
};

export default JobManager;
