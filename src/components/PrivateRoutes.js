import React from "react";
import { Navigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

export const PrivateRoutes = ({ element }) => {
  const { isLogin } = useRecoilValue(AuthStateAtom);
  console.log(isLogin);

  return isLogin ? element : <Navigate to="/" />;
};
