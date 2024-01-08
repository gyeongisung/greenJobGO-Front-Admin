import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const HeaderWrap = styled.div`
  background: ${Maincolor.white};
  /* width: calc(100vw - 200px); */
  height: 60px;

  .breadcrumb-wrap {
    position: absolute;
    top: 6px;
    left: 250px;
    height: 60px;
    padding: 1%;
    cursor: pointer;
  }
`;
