import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

export const PrivateRoutes = ({ element }) => {
  const { isLogin } = useRecoilValue(AuthStateAtom);

  console.log(isLogin);
  
  const navigate = useNavigate();


  return isLogin ? element : navigate("/");
};
