import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

// axios 인스턴스 생성
export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정
client.interceptors.request.use(
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

// 응답 인터셉터 설정
client.interceptors.response.use(
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

        this.props.history.push("/admin/");
      } catch (error) {
        this.props.history.push("/admin/");
      }
    }
    return Promise.reject(error);
  },
);

// 로그인 함수
export const fetchLogin = async (adminId, password, setErrorCancelInfo) => {
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
      setErrorCancelInfo("");

      return { role, accessToken, refreshToken, id, name, accessTokenTime };
    } else {
      throw new Error("잘못된 응답 형식");
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
    throw new Error("로그인에 실패했습니다.");
  }
};

// 로그아웃 함수
export const postLogout = async (accessToken, refreshToken) => {
  try {
    const res = await client.post(`${process.env.REACT_APP_LOGOUT_URL}`);
    removeCookie(accessToken);
    removeCookie(refreshToken);
  } catch (error) {
    this.props.history.push("/admin/");
  }
};

export const getLoginPic = async setLoginPic => {
  try {
    const res = await client.get(`${process.env.REACT_APP_LGp_URL}`);
    setLoginPic(res.data);
  } catch (error) {
    console.log("깜짝놀랬찌?");
  }
};
