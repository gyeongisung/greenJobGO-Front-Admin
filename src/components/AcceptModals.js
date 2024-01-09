import { getClassSubject } from "../api/classAxios";
import { ExcelAcceptModalWrap } from "../styles/ExcelUploadStyle";
import { AcceptModalWrap } from "../styles/ModalStyle";

export const ExcelAcceptModal = ({
  excelOkModal,
  setExcelOkModal,
  uploadResult,
}) => {
  const handleOk = () => {
    setExcelOkModal(false);
  };

  return (
    <>
      {excelOkModal && (
        <ExcelAcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>✖</span>
              </div>
              <h2>{uploadResult ? "업로드 완료" : "업로드 실패"}</h2>
              <div className="content">
                <span>
                  {uploadResult
                    ? "등록이 완료되었습니다."
                    : "파일이 정상적으로 업로드되지 않았습니다."}
                </span>
              </div>
              <div className="btns">
                <button onClick={handleOk}>확인</button>
              </div>
            </div>
          </div>
        </ExcelAcceptModalWrap>
      )}
    </>
  );
};

export const AcceptModal = ({
  acceptOkModal,
  setAcceptOkModal,
  uploadResult,
  fetchData,
}) => {
  const handleOk = () => {
    setAcceptOkModal(false);
    fetchData();
  };

  return (
    <>
      {acceptOkModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>✖</span>
              </div>
              <h2>{uploadResult ? "업로드 완료" : "업로드 실패"}</h2>
              <div className="content">
                <span>
                  {uploadResult
                    ? "등록이 완료되었습니다."
                    : "정상적으로 등록 되지 않았습니다."}
                </span>
              </div>
              <div className="btns">
                <button onClick={handleOk}>확인</button>
              </div>
            </div>
          </div>
        </AcceptModalWrap>
      )}
    </>
  );
};
