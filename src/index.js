import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Disclaimer from "views/Disclaimer.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import ViewUser from "views/ViewUser";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/admin/Disclaimer' element={<Disclaimer />}></Route>
      <Route path='/admin/ViewUser/:patientID' element={<ViewUser />}></Route>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="*" element={<Navigate to="/admin/Home" replace />} />
    </Routes>
  </BrowserRouter>
);
