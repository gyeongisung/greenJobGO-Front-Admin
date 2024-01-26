import React, { useEffect, useState } from "react";
import StudentPostAuth from "./StudentPostAuth";
import StudentGetAuthData from "./StudentGetAuthData";
import { MainLeftSty } from "../../styles/HomeStyle";
import { getStudentAuthData } from "../../api/homeAxios";
import ErrorModal from "../ErrorModal";

const StudentAuth = () => {
  const [authInfo, setAuthInfo] = useState([]);

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getStudentAuthData(setAuthInfo, setErrorApiInfo);
      } catch (error) {
        // console.error("API 호출 중 에러 발생:", error);
        setErrorApiInfo(
          `[${error.message}] 수강생 권한 정보가 정상적으로 Load 되지 않았습니다.`,
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);
  return (
    <MainLeftSty>
      <div className="main-title-div">
        <h2>수강생 이력서 등록/열람 기간 설정</h2>
      </div>
      <div>
        <StudentPostAuth setAuthInfo={setAuthInfo} />
        <StudentGetAuthData authInfo={authInfo} />
      </div>
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false), setErrorApiInfo("");
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false), setErrorApiInfo("");
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </MainLeftSty>
  );
};

export default StudentAuth;
