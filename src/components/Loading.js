import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div>
        <p>로딩중</p>
      <FadeLoader />
    </div>
  );
};

export default Loading;
