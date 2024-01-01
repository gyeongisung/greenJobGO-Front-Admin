import { ModalInner, ModalWrap } from "../styles/ModalStyle";

export const ClassMgmtModal = ({ modalOpen, setModalOpen, setAccept }) => {
  const handleModalCancel = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const handleModalAccept = () => {
    setAccept(true);

    setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <ModalWrap>
          <div className="dim"></div>
          <ModalInner>
            <ul className="modal-top">
              <li>
                <h2>과정등록</h2>
              </li>
              <li>
                <span onClick={handleModalCancel}>✖</span>
              </li>
            </ul>
            <div className="modal-btm">
              <ul>
                <li>
                  <div>
                    <h3>대분류</h3>
                  </div>
                  <div>
                    <select name="category-state">
                      <option name="category-state" value="선택">
                        선택
                      </option>
                      <option name="category-state" value="카테고리1">
                        카테고리1
                      </option>
                      <option name="category-state" value="카테고리2">
                        카테고리2
                      </option>
                      <option name="category-state" value="카테고리3">
                        카테고리3
                      </option>
                      <option name="category-state" value="카테고리4">
                        카테고리4
                      </option>
                    </select>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>과정명</h3>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>수강 기간</h3>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>강사명</h3>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </li>
                <li>
                  <div>
                    <h3>강의실</h3>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="modal-ok">
              <button onClick={handleModalAccept}>등록</button>
            </div>
          </ModalInner>
        </ModalWrap>
      )}
    </>
  );
};
