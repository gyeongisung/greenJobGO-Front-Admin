import React, { useEffect, useState } from "react";
import { CompanyAuthPostSty, StudentAuthPostSty } from "../../styles/HomeStyle";
import { ConfigProvider, DatePicker, Space } from "antd";
import { BtnGlobal } from "../../styles/GlobalStyle";
import { getCompanyAuthData, patchCompanyAuthData } from "../../api/homeAxios";
import ConfirmModal from "../ConfirmModal";
import dayjs from "dayjs";
import OkModal from "../OkModal";
import ErrorModal from "../ErrorModal";

const CompanyPostAuth = ({ setAuthInfo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [icompany, setIcompany] = useState("1");

  // 에러처리 state
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  // api 오류 메세지 받아오는 state.
  const [apiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [errorApiInfo, setErrorApiInfo] = useState("");

  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  //  이전날짜 선택못하게 막기
  const disabledDate = current => {
    return current && current < dayjs().startOf("day");
  };

  const onRangeChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  // 권한기간 수정 버튼
  const handleSummit = () => {
    setStartDateError(!startDate ? "권한 시작 날짜를 선택 해 주세요." : "");
    setEndDateError(!endDate ? "권한 종료 날짜를 선택 해 주세요." : "");

    const isError = !startDate || !endDate;

    // 에러가 없을 때 모달 열기
    if (!isError) {
      setModalOpen(true);
    } else {
      setErrorModalOpen(true);
    }
  };
  const handleSummitConfirm = async () => {
    try {
      await patchCompanyAuthData({
        icompany,
        startDate,
        endDate,
        setErrorApiInfo,
      });
      setModalOpen(false);
      await updateData();
      setStartDate("");
      setEndDate("");
    } catch (error) {
      // console.log("변경실패", error);
    }
  };
  // api 요청 성공할 때 화면 리랜더링
  const updateData = async () => {
    try {
      const newData = await getCompanyAuthData(setAuthInfo);
    } catch (error) {
      console.error("데이터 업데이트 에러:", error);
    }
  };

  useEffect(() => {
    if (errorApiInfo) {
      setApiErrorModalOpen(true);
    } else {
      setApiErrorModalOpen(false);
    }
  }, [errorApiInfo]);

  return (
    <CompanyAuthPostSty>
      <ul className="click-content">
        <li>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#bce182",
              },
            }}
          >
            <Space direction="vertical" size={12}>
              <RangePicker
                format={dateFormat}
                onChange={onRangeChange}
                id="company-auth-date"
                disabledDate={disabledDate}
                value={[
                  startDate ? dayjs(startDate) : null,
                  endDate ? dayjs(endDate) : null,
                ]}
                placeholder={["시작 날짜", "종료 날짜"]}
              />
            </Space>
          </ConfigProvider>
        </li>
      </ul>
      <BtnGlobal className="auth-post" onClick={handleSummit}>
        적용
      </BtnGlobal>
      {/* 권한 변경 확인모달 */}
      {modalOpen && (
        <ConfirmModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          onConfirm={handleSummitConfirm}
          onCancel={() => setModalOpen(false)}
        >
          <span>기업 계정 열람 시간을 변경 하시겠습니까?</span>
        </ConfirmModal>
      )}
      {/* 빈값 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          open={errorModalOpen}
          close={() => setErrorModalOpen(false)}
          onConfirm={() => setErrorModalOpen(false)}
        >
          <span>{startDateError || endDateError}</span>
        </OkModal>
      )}
      {/* api 에러 확인모달 */}
      {apiErrorModalOpen && (
        <ErrorModal
          header={""}
          open={apiErrorModalOpen}
          close={() => {
            setApiErrorModalOpen(false)
          }}
          onConfirm={() => {
            setApiErrorModalOpen(false)
          }}
        >
          <span>{errorApiInfo}</span>
        </ErrorModal>
      )}
    </CompanyAuthPostSty>
  );
};

export default CompanyPostAuth;
