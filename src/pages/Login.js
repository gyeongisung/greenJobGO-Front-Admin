import React, { useState } from "react";
import { LoginInner, LoginWrap } from "../styles/LoginStyle";
import { fetchLogin } from "../api/client";
import { useNavigate } from "react-router";

const Login = () => {
  const [adminId, setAdmminId] = useState("greendg100");
  const [password, setPassword] = useState("green1234");
  const [errmsg, setErrMsg] = useState(false);
  const navigate = useNavigate();

  const handleLoginId = e => {
    setAdmminId(e.target.value);
  };

  const handleLoginPass = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const role = await fetchLogin(adminId, password);
    if (role === "ROLE_ADMIN") {
      navigate("/home");
    } else {
      setErrMsg(true);
    }
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
    </LoginWrap>
  );
};

export default Login;
