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
        <Route path="/admin/" element={<Login />} />
        {/* <Route element={<PrivateRoutes element={<AdminLayout />} />}> */}
        <Route element={<PrivateRoutes element={<AdminLayout />} />}>
          {/* 관리자 인트로 */}
          <Route path="/admin/home" element={<Home />} />
          {/* 수업 과정 관리 */}
          <Route path="/admin/class" element={<ClassMgmt />} />
          {/* 취업담당자 관리 */}
          <Route path="/admin/jobmanager" element={<JobManager />} />
          {/* 수강생 등록 */}
          <Route path="/admin/register" element={<Register />} />
          {/* 수강생 관리 */}
          <Route path="/admin/student" element={<StudentMgmt />} />
          <Route path="/admin/student/:istudent" element={<StudentInfo />} />
          <Route
            path="/admin/student/portfolioEdit"
            element={<StudentPortF />}
          />
          {/* 수강생 포트폴리오 관리 */}
          <Route path="/admin/portfolio" element={<PortfolioMgmt />} />
          {/* 기업 관리 */}
          <Route path="/admin/company" element={<CompanyMgmt />} />
          {/* 일괄 삭제 */}
          <Route path="/admin/bulk" element={<BulkDelete />} />
          {/* 영구 삭제 */}
          <Route path="/admin/permanently" element={<PermanentlyDelete />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
