import styled from "@emotion/styled";

export const PagiWrap = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 23px;
    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #176b87;
        font-size: 20px;
        line-height: 18px;
      }
    }
    .active a {
      color: #fff;
    }
    .active {
      background-color: #176b87;
    }
  }
  .page-selection {
    width: 48px;
    height: 30px;
    line-height: 30px;
    color: #176b87;
  }
`;
