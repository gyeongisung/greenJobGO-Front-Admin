import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";
import AdminLayout from "../pages/AdminLayout";

export const PrivateRoutes = ({ element }) => {
  const navigate = useNavigate();
  const { isLogin } = useRecoilValue(AuthStateAtom);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  console.log("isLogin 잘동하니", isLogin);

  return isLogin ? element : null;
};
