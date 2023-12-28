import styled from "@emotion/styled";

export const LayoutWrap = styled.div`
  position: relative;
  .layout-inner {
    display: flex;
    > li {
      :first-of-type {
        width: 300px;
        height: 100vh;
        background: red;
      }
      :last-of-type {
        width: 100%;
        .header-wrap {
          width: 100%;
        }
        .content {
          width: 100%;
          padding: 10px;
          height: calc(100vh - 60px);
          .content-wrap {
            height: 100%;
            border-radius: 5px;
            background: #f7f7f7;
            box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;
