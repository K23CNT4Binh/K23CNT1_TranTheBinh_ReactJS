import React from "react";  // 🛠 Sửa lỗi chính tả khi import React
import { BrowserRouter as TtbRouter, Route, Routes } from "react-router-dom";
import TtbNavBar from "./components/TtbNavBar";
import TtbHome from "./components/TtbHome";
import TtbCreateUser from "./components/TtbCreateUser";
import TtbEditUser from "./components/TtbEditUser";
import TtbListUser from "./components/TtbListUser";

export default function TtbApp() {
  return (
    <TtbRouter> 
      <div className="container border my-3 p-3">
        <h1 className="alert alert-danger text-center">
          K23CNT1 - Tran The Binh -2310900012
        </h1>
        <hr />
        <TtbNavBar />
        <Routes>  {/* 🛠 Sử dụng Routes thay vì Routers */}
          <Route path="/" element={<TtbHome />} />
          <Route path="ttb-list-user/" element={<TtbListUser />} />
          <Route path="ttb-create-user/" element={<TtbCreateUser />} />
          <Route path="ttb-edit-user/:id" element={<TtbEditUser />} />
        </Routes>
      </div>
    </TtbRouter>
  );
}
