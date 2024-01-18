import styled from "@emotion/styled";
import { Maincolor, ellipsis } from "./GlobalStyle";

export const MainWrapSty = styled.div`
  width: calc(1920px - 270px);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

// 메인 좌측 스타일
export const MainLeftSty = styled.div`
  height: calc(100vh - 125px);
  width: 100%;
  margin: 30px 0;
  padding: 0 30px;
  border-right: 1px solid ${Maincolor.grayDeep};
  overflow: auto;
  .main-title-div {
    width: 363px;
    height: 64px;
    border-radius: 6px 6px 0px 0px;
    background: #9bcfee;

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -2px;
      color: ${Maincolor.black};
      margin: 15px 20px;
    }
  }
  & > div {
    display: grid;
    grid-template-rows: repeat(2, minmax(335px, auto));
  }
`;

// 학생 권한 설정 섹션
export const StudentAuthPostSty = styled.div`
  position: relative;
  margin: 0 auto;
  width: 765px;
  height: 130px;
  border-radius: 0px 6px 6px 6px;
  /* background: ${Maincolor.search}; */
  background: #e0ecf3;
  /* select창 화살표 커스텀 */
  .select-wrap {
    border-radius: 6px;
    background: ${Maincolor.white};
    select {
      -o-appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: url(${process.env.PUBLIC_URL}/assets/Arrowdown.png) no-repeat
        calc(100% - 12px) 50%/11px auto;
      padding: 0 28px 0 10px;
    }
    select::-ms-expand {
      display: none;
    }
  }
  /* 선택창 style */
  .click-content {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
    #cate-select-student,
    #subject-select-student {
      padding: 8px 12px;
      align-items: center;
      border-radius: 6px;
      border: 1px solid ${Maincolor.maingray};
    }
    /* 대분류 선택 */
    #cate-select-student {
      width: 150px;
      height: 40px;
    }
    /* 과목 선택 */
    #subject-select-student {
      width: 260px;
      height: 40px;
    }
    /* 날짜 범위 선택 */
    .ant-space-item .ant-picker {
      width: 294px;
      height: 40px;
    }
  }
  /* 적용버튼 */
  .auth-post {
    position: absolute;
    top: calc(50% - 25px);
    right: 40px;
    width: 136px;
    height: 50px;
  }
`;

// 학생 권한 리스트
export const StudentAuthgetListSty = styled.div`
  margin: 0 auto;
  border-top: 1px solid ${Maincolor.maingray};

  .auth-list-div {
    border-radius: 12px;
    border: 1px solid ${Maincolor.maingray};
    width: 748px;
    height: 337px;
    margin: 40px 8px 0 8px;
    padding: 20px;
    h2 {
      margin-bottom: 20px;
    }
    .class-auth-list {
      width: 710px;
      height: 240px;
      overflow-x: hidden;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: block;
        width: 5px;
        height: 5px;
      }
      /* 스크롤바 막대 */
      ::-webkit-scrollbar-thumb {
        background: ${Maincolor.btn}; /* 스크롤바 막대 색상 */
        /* border-radius: 12px 12px 12px 12px; */
      }
      /* 스크롤바 막대 외부 */
      ::-webkit-scrollbar-track {
        background: ${Maincolor.maingray}; /* 스크롤바 뒷 배경 색상 */
      }
      & > ul {
        width: 693px;
        height: 40px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 10px 0;
        & > li {
          background: ${Maincolor.search};
          border-radius: 6px;
          padding: 11px;
          width: 100%;
          .title {
            text-align: left;
            width: 440px;
            ${ellipsis.one}
          }
          .date {
            float: right;
            width: 160px;
            ${ellipsis.one}
          }
        }
      }
    }
  }
`;

// 메인 우측 스타일
export const MainRightSty = styled.div`
  height: calc(100vh - 125px);
  margin: 30px 0;
  padding: 0 30px;
  overflow: auto;
  .main-title-div {
    width: 271px;
    height: 64px;
    border-radius: 6px 6px 0px 0px;
    background: #bce182;
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 140%;
      letter-spacing: -2px;
      color: ${Maincolor.black};
      margin: 15px 20px;
    }
  }
  & > div {
    display: grid;
    /* grid-template-rows: 1fr 1fr; */
    grid-template-rows: repeat(2, minmax(335px, auto));
  }
`;

// 기업 권한 설정 섹션
export const CompanyAuthPostSty = styled.div`
  position: relative;
  margin: 0 auto;
  width: 765px;
  height: 130px;
  border-radius: 0px 6px 6px 6px;
  background: #e7f3d5;
  .click-content {
    margin: 20px;
    /* 날짜 범위 선택 */
    .ant-space-item .ant-picker {
      width: 294px;
      height: 40px;
    }
  }
  /* 적용버튼 */
  .auth-post {
    position: absolute;
    top: calc(50% - 25px);
    right: 40px;
    width: 136px;
    height: 50px;
  }
`;

// 기업 권한 정보
export const CompanyAuthgetListSty = styled.div`
  margin: 0 auto;
  border-top: 1px solid ${Maincolor.maingray};
  width: 100%;

  .auth-list-div {
    border-radius: 12px;
    border: 1px solid ${Maincolor.maingray};
    height: 78px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: ${Maincolor.black};
    }
  }
`;
