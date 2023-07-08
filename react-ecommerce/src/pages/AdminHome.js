import React from "react";
import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";

const AdminHome = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AdminProductList></AdminProductList>
    </div>
  );
};

export default AdminHome;
