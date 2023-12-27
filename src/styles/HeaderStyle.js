import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  background: cyan;
  > div {
    width: 36px;
    height: 36px;
    font-size: 0;
    background-position: 3px 1.4px;
    background-size: 24px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      object-fit: cover;
      background: transparent;
      width: 100%;
      height: 100%;
    }
  }
  > span {
    font-size: 18px;
    color: #fff;
    :not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;
