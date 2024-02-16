import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";
import { useNavigate } from "react-router";
import { useEffect } from "react";

// axios 인스턴스 생성
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor 컴포넌트
const Interceptor = ({ children }) => {
  const navigate = useNavigate();

  const requestInterceptor = client.interceptors.request.use(
    async config => {
      const token = getCookie("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  const responseInterceptor = client.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const { config } = error;
      const response = error.response || {};
      const status = response.status || null;
      if (status === 401) {
        try {
          removeCookie("refreshToken");
          if (config && config.headers && config.headers.Authorization) {
            removeCookie("accessToken");
          }
          navigate("/admin");
        } catch (error) {
          console.error(error);
        }
      }
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      client.interceptors.request.eject(requestInterceptor);
      client.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);

  return children;
};

// 로그인 함수
const fetchLogin = async (adminId, password, setErrorCancelInfo) => {
  try {
    const res = await client.post(`${process.env.REACT_APP_LG_URL}`, {
      id: adminId,
      pw: password,
    });

    const { data } = res;

    const { role, refreshToken, accessToken, id, name, accessTokenTime } = data;

    if (role === "ROLE_ADMIN" && refreshToken && accessToken) {
      setCookie("refreshToken", refreshToken);
      setCookie("accessToken", accessToken);

      return { role, accessToken, refreshToken, id, name, accessTokenTime };
    } else {
      setErrorCancelInfo("로그인을 다시 시도해주세요.");
    }
  } catch (error) {
    const { status } = error.response;
    if (error.response) {
      switch (status) {
        case 433:
          setErrorCancelInfo("아이디를 확인 해 주세요.");
          break;
        case 434:
          setErrorCancelInfo("비밀번호를 확인 해 주세요");
          break;
        case 500:
          setErrorCancelInfo("서버오류 입니다.");
          break;
        default:
          setErrorCancelInfo("로그인에 실패했습니다.");
      }
    } else {
      setErrorCancelInfo("네트워크 오류 또는 서버 응답이 없습니다.");
    }
  }
};

// 로그아웃 함수
const postLogout = async () => {
  try {
    const res = await client.post(`${process.env.REACT_APP_LOGOUT_URL}`);
    removeCookie("accessToken");
    removeCookie("refreshToken");
  } catch (error) {
    this.props.history.push("/admin/");
  }
};

// 로그인 사진 get
const getLoginPic = async (setLoginPic, setErrorCancelInfo) => {
  try {
    const res = await client.get(`${process.env.REACT_APP_LGp_URL}`);
    setLoginPic(res.data);
  } catch (error) {
    setErrorCancelInfo("관리자에게 문의 해주세요.");
  }
};

export default client;
export { Interceptor, fetchLogin, postLogout, getLoginPic };
