import { DeleteModalWrap } from "../../styles/DeleteModalStyle";
import { deleteCompany, patchCompany } from "../../api/companyAxios";
import { CompanyAcceptModalWrap } from "../../styles/ModalStyle";
import { useState } from "react";
import { ExcelUploadModalWrap } from "../../styles/ExcelUploadStyle";
import { AcceptModal } from "../AcceptModals";

export const ExcelUploadModal = ({
  excelModalOpen,
  setExcelModalOpen,
  handleExcelUpload,
  selectedFile,
  setSelectedFile,
}) => {
  const handleFileChange = e => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };
  const handleCancel = () => {
    setExcelModalOpen(false);
  };
  return (
    <>
      {excelModalOpen && (
        <ExcelUploadModalWrap>
          <div className="dim">
            <div className="modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>엑셀 업로드</h2>
                </li>
                <li>
                  <span onClick={handleCancel}>✖</span>
                </li>
              </ul>
              <div className="content">
                <h3>기업 등록</h3>
                <div>
                  <span>
                    엑셀을 업로드하여 다수의 기업 정보를 한번에 입력할 수
                    있습니다.
                    <br />
                    양식에 맞춰 정보를 입력한 뒤 업로드해주세요.
                  </span>
                </div>
              </div>
              <div className="file-box">
                <input
                  type="file"
                  id="file"
                  accept=".xlsx, .xls, .csv"
                  onChange={handleFileChange}
                />
                <label htmlFor="file">파일첨부</label>
                <input
                  className="upload-name"
                  value={selectedFile ? selectedFile.name : "첨부파일"}
                  placeholder="첨부파일"
                  readOnly
                />
              </div>
              <div className="btn">
                <button onClick={e => handleExcelUpload(e.target.files)}>
                  확인
                </button>
              </div>
            </div>
          </div>
        </ExcelUploadModalWrap>
      )}
    </>
  );
};

export const DeleteCompanyModal = ({
  deleteModalOpen,
  setDeleteModalOpen,
  saveCheckBox,
  setListData,
  setSaveCheckBox,
}) => {
  const handleDeleteCompany = async () => {
    const checkedCompanyCode = saveCheckBox;

    try {
      await deleteCompany(checkedCompanyCode);

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
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span onClick={closeModal}>✖</span>
              </div>
              <div className="content">
                <span>해당 기업을 삭제 하시겠습니까?</span>
              </div>
              <div className="btns">
                <button onClick={closeModal}>취소</button>
                <button onClick={handleOk}>확인</button>
              </div>
            </div>
          </div>
        </DeleteModalWrap>
      )}
    </>
  );
};

export const CompanyMgmtModal = ({
  modalOpen,
  setModalOpen,
  payload,
  setPayload,
  handleModalAccept,
}) => {
  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {modalOpen && (
        <CompanyAcceptModalWrap>
          <div className="dim">
            <div className="company-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>기업등록</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div className="modal-btm">
                <ul>
                  <li>
                    <div>
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
                            manager: e.target.value,
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
              </div>
              <div className="modal-ok">
                <button onClick={handleModalAccept}>등록</button>
              </div>
            </div>
          </div>
        </CompanyAcceptModalWrap>
      )}
    </>
  );
};

export const EdeitCompanyModal = ({
  companyInfo,
  editModalOpen,
  setEditModalOpen,
  handleModalCancel,
  acceptOkModal,
  setAcceptOkModal,
  uploadResult,
  setUpLoadResult,
}) => {
  const [companyData, setCompanyData] = useState({
    companyCode: companyInfo.companyCode,
    area: companyInfo.area,
    companyName: companyInfo.companyName,
    leaderName: companyInfo.leaderName,
    jobField: companyInfo.jobField,
    manager: companyInfo.manager,
    phoneNumber: companyInfo.phoneNumber,
    dateConslusion: companyInfo.dateConslusion,
  });

  const handleModalAccept = async () => {
    try {
      const result = await patchCompany(companyData);

      setUpLoadResult(result);
      if (result.success) {
        setEditModalOpen(false);
        setAcceptOkModal(true);
      }
    } catch (error) {
      setEditModalOpen(false);
      setAcceptOkModal(true);
    }
  };

  return (
    <>
      {editModalOpen && (
        <CompanyAcceptModalWrap>
          <div className="dim">
            <div className="company-modal-inner">
              <ul className="modal-top">
                <li>
                  <h2>기업수정</h2>
                </li>
                <li>
                  <span onClick={handleModalCancel}>✖</span>
                </li>
              </ul>
              <div className="modal-btm">
                <ul>
                  <li>
                    <div>
                      <h3>기업명</h3>
                      <input
                        type="text"
                        defaultValue={companyData.companyName}
                        onChange={e => {
                          setCompanyData(companyData => ({
                            ...companyData,
                            companyName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div>
                      <h3>지역</h3>
                      <input
                        type="text"
                        defaultValue={companyData.area}
                        onChange={e => {
                          setCompanyData(companyData => ({
                            ...companyData,
                            area: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>대표명</h3>
                      <input
                        type="text"
                        defaultValue={companyData.leaderName}
                        onChange={e => {
                          setCompanyData(companyData => ({
                            ...companyData,
                            leaderName: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div>
                      <h3>체결일자</h3>
                      <input
                        type="text"
                        defaultValue={companyData.dateConslusion}
                        onChange={e => {
                          setCompanyData(companyData => ({
                            ...companyData,
                            dateConslusion: e.target.value,
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
                        defaultValue={companyData.manager}
                        onChange={e => {
                          setCompanyData(companyData => ({
                            ...companyData,
                            manager: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div>
                      <h3>연락처</h3>
                      <input
                        type="text"
                        defaultValue={companyData.phoneNumber}
                        onChange={e => {
                          setCompanyData(companyData => ({
                            ...companyData,
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
                    defaultValue={companyData.jobField}
                    onChange={e => {
                      setCompanyData(companyData => ({
                        ...companyData,
                        jobField: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              {acceptOkModal && (
                <AcceptModal
                  acceptOkModal={acceptOkModal}
                  setAcceptOkModal={setAcceptOkModal}
                  uploadResult={uploadResult}
                />
              )}
              <div className="modal-ok">
                <button onClick={handleModalAccept}>수정</button>
              </div>
            </div>
          </div>
        </CompanyAcceptModalWrap>
      )}
    </>
  );
};
