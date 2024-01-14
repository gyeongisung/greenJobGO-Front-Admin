import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const HeaderWrap = styled.div`
  background: ${Maincolor.white};
  /* width: calc(100vw - 200px); */
  height: 60px;
  .breadcrumb-wrap {
    position: absolute;
    top: 0px;
    left: 250px;
    height: 60px;
    padding: 1%;
    color: ${Maincolor.black};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    cursor: pointer;
  }
`;
