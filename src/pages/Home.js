import React from "react";
import CompanyAuth from "../components/main/CompanyAuth";
import StudentAuth from "../components/main/StudentAuth";
import { MainWrapSty } from "../styles/HomeStyle";

const Home = () => {
  return (
    <MainWrapSty>
      <StudentAuth />
      <CompanyAuth />
    </MainWrapSty>
  );
};

export default Home;
