import React from "react";
import { Maincolor } from "../styles/GlobalStyle";
import { HashLoader } from "react-spinners";

const UploadLoading = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(2px)",
          zIndex: "999",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            position: "absolute",
            width: "50%",
            height: "50%",
            overflow: "hidden",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HashLoader color="#228fcf" />
          <h3 style={{ color: `${Maincolor.white}` }}>잠시만 기다려주세요.</h3>
        </div>
      </div>
    </div>
  );
};

export default UploadLoading;
