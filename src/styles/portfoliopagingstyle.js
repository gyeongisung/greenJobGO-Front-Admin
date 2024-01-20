import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const PortfolioPagingSty = styled.div`
  ul {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
    li {
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      a {
        color: #bababa;
        text-decoration: none;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        font-weight: 400;
        letter-spacing: -0.56px;
        font-style: normal;
      }
    }
    .active a {
      color: ${Maincolor.black};
      font-style: italic;
      font-size: 14px;
    }
    .active {
      /* background-color: ${Maincolor.admintxt}; */
    }
  }
`;
