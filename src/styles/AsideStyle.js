import styled from "@emotion/styled";

export const AsideWrap = styled.div`
  position: relative;

  .gnb-wrap {
    width: 100%;
    .gnb {
      color: white;
      > li {
        position: relative;
        height: 80px;
        font-size: 23px;
        font-weight: 500;
        /* text-align: start; */
        line-height: 80px;
        /* padding-left: 20px; */
        cursor: pointer;
        overflow: hidden;
        transition: height 0.3s ease;
        border-bottom: 2px solid #d2d2d2;
        &.active {
          height: 200px;
        }
        > span {
          display: block;
        }
        .sub-menu {
          > li {
            height: 60px;
            font-size: 18px;
            line-height: 60px;
            font-weight: 400;
            cursor: pointer;
            overflow: hidden;
            transition: height 0.3s ease;
            border-top: 2px solid #d2d2d2;
            span {
              padding-left: 20px;
              &:hover {
                color: #006dab;
              }
            }
          }
        }
      }
    }
  }
`;
