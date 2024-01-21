import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import AdminLayout from "./pages/AdminLayout";
import Home from "./pages/Home";
import ClassMgmt from "./pages/ClassMgmt";
import StudentMgmt from "./pages/StudentMgmt";
import CompanyMgmt from "./pages/CompanyMgmt";
import NotFound from "./pages/NotFound";
import PortfolioMgmt from "./pages/PortfolioMgmt";
import Register from "./pages/Register";
import JobManager from "./pages/JobManager";
import { PrivateRoutes } from "./components/PrivateRoutes";
import PermanentlyDelete from "./pages/PermanentlyDelete";
import BulkDelete from "./pages/BulkDelete";
import StudentInfo from "./components/studentmgmt/StudentInfo";
import StudentPortF from "./components/studentmgmt/StudentPortF";

function App() {
  return (
    <>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />
        {/* <Route element={<PrivateRoutes element={<AdminLayout />} />}> */}
        <Route element={<PrivateRoutes element={<AdminLayout />} />}>
          {/* 관리자 인트로 */}
          <Route path="/home" element={<Home />} />
          {/* 수업 과정 관리 */}
          <Route path="/class" element={<ClassMgmt />} />
          {/* 취업담당자 관리 */}
          <Route path="/jobmanager" element={<JobManager />} />
          {/* 수강생 등록 */}
          <Route path="/register" element={<Register />} />
          {/* 수강생 관리 */}
          <Route path="/student" element={<StudentMgmt />} />
          <Route path="/student/:istudent" element={<StudentInfo />} />
          <Route path="/student/portfolioEdit" element={<StudentPortF />} />
          {/* 수강생 포트폴리오 관리 */}
          <Route path="/portfolio" element={<PortfolioMgmt />} />
          {/* 기업 관리 */}
          <Route path="/company" element={<CompanyMgmt />} />
          {/* 일괄 삭제 */}
          <Route path="/bulk" element={<BulkDelete />} />
          {/* 영구 삭제 */}
          <Route path="/permanently" element={<PermanentlyDelete />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
