import React, { useState } from "react";
import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { CompanyAcceptModalInner, CompanyAcceptModalWrap } from "../../styles/ModalStyle";

export const DeleteStudnetModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
}) => {
  const handleDeleteCompany = async () => {
    const checkedCompanyCode = saveCheckBox;

    try {
      // await deleteCompany(checkedCompanyCode);

      setListData(prevListData =>
        prevListData.filter(
          item => !checkedCompanyCode.includes(item.companyCode),
        ),
      );

      setSaveCheckBox([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOk = async () => {
    await handleDeleteCompany();
    setDeleteModalOpen(false);
  };

  const closeModal = () => {
    setDeleteModalOpen(false);
  };

  return (
    <>
      {deleteModalOpen && (
        <DeleteModalWrap>
          <div className="dim"></div>
          <div className="content-wrap">
            <div className="header">
              <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
            </div>
            <div className="content">
              <span>선택하신 기업을 삭제 하시겠습니까?</span>
              <span>삭제하신 기업은 영구 삭제되어 복구할 수 없습니다.</span>
            </div>
            <div className="btns">
              <button onClick={handleOk}>확인</button>
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </DeleteModalWrap>
      )}
    </>
  );
};

export const StudentModal = ({ modalOpen, setModalOpen }) => {
  const [payload, setPayload] = useState({
    area: "",
    companyName: "",
    leaderName: "",
    jobField: "",
    manger: "",
    phoneNumber: "",
    dateConslusion: "",
  });

  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleModalAccept = () => {
    // postCompanyAccept(payload);
    setModalOpen(false);
  };
  console.log(payload);
  return (
    <>
      {modalOpen && (
        <CompanyAcceptModalWrap>
          <div className="dim"></div>
          <CompanyAcceptModalInner>
            <ul className="modal-top">
              <li>
                <h2>기업등록</h2>
              </li>
              <li>
                <span onClick={handleModalCancel}>✖</span>
              </li>
            </ul>
            <div className="modal-btm">
              <div className="company-info">
                <h3>기업명</h3>
                <input
                  type="text"
                  value={payload.companyName}
                  onChange={e => {
                    setPayload(payload => ({
                      ...payload,
                      companyName: e.target.value,
                    }));
                  }}
                />
              </div>
              <ul>
                <li>
                  <div>
                    <h3>대표명</h3>
                    <input
                      type="text"
                      value={payload.leaderName}
                      onChange={e => {
                        setPayload(payload => ({
                          ...payload,
                          leaderName: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <h3>지역</h3>
                    <input
                      type="text"
                      value={payload.area}
                      onChange={e => {
                        setPayload(payload => ({
                          ...payload,
                          area: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>담당자</h3>
                    <input
                      type="text"
                      value={payload.manger}
                      onChange={e => {
                        setPayload(payload => ({
                          ...payload,
                          manger: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <h3>연락처</h3>
                    <input
                      type="text"
                      value={payload.phoneNumber}
                      onChange={e => {
                        setPayload(payload => ({
                          ...payload,
                          phoneNumber: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </li>
              </ul>
              <div className="company-info">
                <h3>채용분야</h3>
                <input
                  type="text"
                  value={payload.jobField}
                  onChange={e => {
                    setPayload(payload => ({
                      ...payload,
                      jobField: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="company-info">
                <h3>체결일자</h3>
                <input
                  type="text"
                  value={payload.dateConslusion}
                  onChange={e => {
                    setPayload(payload => ({
                      ...payload,
                      dateConslusion: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="modal-ok">
              <button onClick={handleModalAccept}>등록</button>
            </div>
          </CompanyAcceptModalInner>
        </CompanyAcceptModalWrap>
      )}
    </>
  );
};
