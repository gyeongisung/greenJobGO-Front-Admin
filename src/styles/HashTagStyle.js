import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const HashTagWrap = styled.div`
  width: 100%;
`;

export const HashTagInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  > .hash-tag-input {
    width: 300px;
    margin: 5px;
    display: inline-flex;
    cursor: text;
    height: 26px;
    border: none;
  }
  > .tags {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    font-size: 16px;
    font-weight: 400;
    color: ${Maincolor.black};
    background: ${Maincolor.search};
    border-radius: 6px;
    padding: 5px 5px 5px 10px;
    > .remove {
      padding-top: 10px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;
