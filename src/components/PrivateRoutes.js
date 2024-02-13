import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

export const PrivateRoutes = ({ element }) => {
  const navigate = useNavigate();
  const { isLogin, accessToken } = useRecoilValue(AuthStateAtom);

  console.log("프라빗토큰", accessToken);
  useEffect(() => {
    if (!isLogin && accessToken) {
      navigate("/admin/");
    }
  }, [isLogin, navigate]);

  return isLogin ? element : null;
};
