import React from "react";
import { NoItemSty } from "../styles/GlobalStyle";

const NoListItem = () => {
  return (
    <NoItemSty>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/nolist.png`}
          alt="greenlogo"
        />
        <p>검색 결과가 없습니다.</p>
      </div>
    </NoItemSty>
  );
};

export default NoListItem;
