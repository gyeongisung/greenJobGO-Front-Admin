import React from "react";
import { useNavigate } from "react-router";
import { NotFoundWrap } from "../styles/NotFoundStyle";
import { useRecoilValue } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";

const NotFound = () => {
  const authState = useRecoilValue(AuthStateAtom);
  const { role } = authState;
  const navigate = useNavigate();

  const handleBack = () => {
    if (role === "ROLE_ADMIN") {
      navigate("/admin/home");
    } else {
      navigate("/admin");
    }
  };
  return (
    <NotFoundWrap>
      <div className="inner">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/LoginTitle.png`}
            alt="X"
          />
        </div>
        <div>
          <h2>
            죄송합니다.
            <br />
            요청하신 페이지를 찾을 수 없습니다.
          </h2>
          <span>방문하시려는 페이지의 주소가 잘못 입력되었거나,</span>
          <span>
            페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수
            없습니다.
          </span>
          <span>
            입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
          </span>
          <div className="info">
            <span>관련 문의사항은</span>
            <span> 교육운영팀</span>
            <span>으로 연락바랍니다.</span>
          </div>
        </div>
        <div>
          <button onClick={handleBack}>돌아가기</button>
        </div>
      </div>
    </NotFoundWrap>
  );
};

export default NotFound;
