import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ClassMgmt from "./pages/ClassMgmt";
import StudentMgmt from "./pages/StudentMgmt";
import CompanyMgmt from "./pages/CompanyMgmt";
import NotFound from "./pages/NotFound";
import PortfolioMgmt from "./pages/PortfolioMgmt";
import CompanyAuth from "./pages/CompanyAuth";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/class" element={<ClassMgmt />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<StudentMgmt />} />
          <Route path="/portfolio" element={<PortfolioMgmt />} />
          <Route path="/company" element={<CompanyMgmt />} />
          <Route path="/companyauth" element={<CompanyAuth />} />
        </Route>
        <Route path="*" elemen={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
