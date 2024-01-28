import React, { useEffect, useState } from "react";
import { LoginInner, LoginWrap } from "../styles/LoginStyle";
import { fetchLogin } from "../api/client";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import OkModal from "../components/OkModal";

const Login = () => {
  const [adminId, setAdmminId] = useState("greendg01");
  const [password, setPassword] = useState("green1234");
  const [errmsg, setErrMsg] = useState(false);

  // 로그인 오류 메세지 받아오는 state.
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorCancelInfo, setErrorCancelInfo] = useState("");

  const [authState, setAuthState] = useRecoilState(AuthStateAtom);

  const navigate = useNavigate();

  const handleLoginId = e => {
    setAdmminId(e.target.value);
  };

  const handleLoginPass = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!adminId) {
      setErrorCancelInfo("아이디를 입력 해 주세요.");
      return;
    } else if (!password) {
      setErrorCancelInfo("비밀번호를 입력 해 주세요.");
      return;
    } else {
      try {
        const { role, accessToken, id, name } = await fetchLogin(
          adminId,
          password,
          setErrorCancelInfo,
        );
        if (role === "ROLE_ADMIN" && accessToken) {
          setAuthState({
            isLogin: true,
            accessToken: accessToken,
            role: role,
            id: id,
            name: name,
          });
          navigate("/admin/home");
        } else {
          navigate("/admin/");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    if (errorCancelInfo) {
      setErrorModalOpen(true);
    } else {
      setErrorModalOpen(false);
    }
  }, [errorCancelInfo]);

  return (
    <LoginWrap>
      <LoginInner>
        <li>
          <img src="../../assets/Login.png" alt="LoginImage" />
        </li>
        <li>
          <div className="login-title">
            <img src="../../assets/LoginTitle.png" alt="LoginTitle" />
          </div>
          <form>
            <div>
              <label htmlFor="login-id">아이디</label>
              <input
                type="text"
                id="login-id"
                placeholder="아이디를 입력해주세요."
                value={adminId}
                onChange={e => handleLoginId(e)}
              />
            </div>
            <div>
              <label htmlFor="login-password">비밀번호</label>
              <input
                type="password"
                id="login-password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={e => handleLoginPass(e)}
              />
            </div>
            <div>
              <button onClick={handleSubmit}>로그인</button>
            </div>
          </form>
        </li>
      </LoginInner>
      {/* api 에러 확인모달 */}
      {errorModalOpen && (
        <OkModal
          header={""}
          open={errorModalOpen}
          close={() => {
            setErrorModalOpen(false), setErrorCancelInfo("");
          }}
          onConfirm={() => {
            setErrorModalOpen(false), setErrorCancelInfo("");
          }}
        >
          <span>{errorCancelInfo}</span>
        </OkModal>
      )}
    </LoginWrap>
  );
};

export default Login;
