import React from "react";
import { FadeLoader } from "react-spinners";
import { Maincolor } from "../styles/GlobalStyle";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "999",
      }}
    >
      <FadeLoader color="#228fcf" />
      <h3 style={{ color: `${Maincolor.btn}` }}>잠시만 기다려주세요.</h3>
    </div>
  );
};

export default Loading;
