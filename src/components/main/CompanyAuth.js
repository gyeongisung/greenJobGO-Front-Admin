import React, { useEffect, useState } from "react";
import CompanyPostAuth from "./CompanyPostAuth";
import CompanyGetAuthData from "./CompanyGetAuthData";
import { MainRightSty } from "../../styles/HomeStyle";
import { getCompanyAuthData } from "../../api/homeAxios";
import OkModal from "../OkModal";

const CompanyAuth = () => {
  const [authInfo, setAuthInfo] = useState([]);

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCompanyAuthData(setAuthInfo, setErrorApiInfo, setErrorApiInfo);
      } catch (error) {
        setErrorApiInfo(`[${error.message}]`);
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
    <MainRightSty>
      <div className="main-title-div">
        <h2>기업 계정 열람 기간 설정</h2>
      </div>
      <div>
        <CompanyPostAuth setAuthInfo={setAuthInfo} />
        <CompanyGetAuthData authInfo={authInfo} />
      </div>
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <OkModal
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
        </OkModal>
      )}
    </MainRightSty>
  );
};

export default CompanyAuth;
