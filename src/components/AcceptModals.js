import {
  DeleteModalWrap,
  HardDeleteModalWrap,
} from "../styles/DeleteModalStyle";
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
  // setEnrollModalOpen,
}) => {
  const handleOk = () => {
    setAcceptOkModal(false);
    // setEnrollModalOpen(false);
  };

  return (
    <>
      {acceptOkModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                    alt="X"
                  />
                </span>
              </div>
              <div className="content">
                <span>
                  {uploadResult
                    ? "정상적으로 처리 되었습니다."
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

export const EditAceeptModal = ({
  acceptOkModal,
  setAcceptOkModal,
  uploadResult,
}) => {
  const handleOk = () => {
    setAcceptOkModal(false);
  };

  return (
    <>
      {acceptOkModal && (
        <AcceptModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>
                  {" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                    alt="X"
                  />
                </span>
              </div>
              <div className="content">
                <span>
                  {uploadResult
                    ? "수정이 완료되었습니다."
                    : "정상적으로 수정 되지 않았습니다."}
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

export const DeleteOkModal = ({
  deleteOkModal,
  handleOkClick,
  handleCancelClick,
}) => {
  return (
    <>
      {deleteOkModal && (
        <DeleteModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span onClick={handleCancelClick}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                    alt="X"
                  />
                </span>
              </div>
              <div className="content">
                <span>해당 항목을 삭제 하시겠습니까?</span>
              </div>
              <div className="btns">
                <button onClick={handleCancelClick}>취소</button>
                <button onClick={handleOkClick}>확인</button>
              </div>
            </div>
          </div>
        </DeleteModalWrap>
      )}
    </>
  );
};
export const DeleteAceeptModal = ({
  deleteOkModalOpen,
  setDeleteOkModalOpen,
  handleDeleteCategory,
  categoryId,
  setEnrollModalOpen
}) => {
  const handleOk = async () => {
    await handleDeleteCategory(categoryId);
    setDeleteOkModalOpen(false);
    // setEnrollModalOpen(false);
  };

  const closeModal = () => {
    setDeleteOkModalOpen(false);
  };

  return (
    <>
      {deleteOkModalOpen && (
        <DeleteModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span onClick={closeModal}>
                  {" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                    alt="X"
                  />
                </span>
              </div>
              <div className="content">
                <span>해당 항목을 삭제 하시겠습니까?</span>
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

export const BulkDeletetModal = ({ modalOpen, setModalOpen, handleDelete }) => {
  const handleOk = async () => {
    await handleDelete();
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <HardDeleteModalWrap>
          <div className="dim">
            <div className="content-wrap">
              <div className="header">
                <span>항목을 삭제하시겠습니까?</span>
                <span onClick={closeModal}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/btn_menu_close.png`}
                    alt="X"
                  />
                </span>
              </div>
              <div className="content">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/bxs_error.png`}
                  alt="경고"
                />
                <span>
                  확인 버튼 클릭 시 해당 항목이 영구적으로 삭제됩니다.
                </span>
              </div>
              <div className="btns">
                <button onClick={closeModal}>취소</button>
                <button onClick={handleOk}>확인</button>
              </div>
            </div>
          </div>
        </HardDeleteModalWrap>
      )}
    </>
  );
};
