import React from "react";
import { LoginInner, LoginWrap } from "../styles/LoginStyle";

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="login-id">아이디</label>
              <input
                type="text"
                id="login-id"
                placeholder="아이디를 입력해주세요."
              />
            </div>
            <div>
              <label htmlFor="login-password">비밀번호</label>
              <input
                type="password"
                id="login-password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div>
              <button>로그인</button>
            </div>
          </form>
        </li>
      </LoginInner>
    </LoginWrap>
  );
};

export default Login;
