import React from "react";
import AdminOrders from "../features/admin/components/AdminOrders";
import Navbar from "./../features/navbar/Navbar";

const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AdminOrders></AdminOrders>
    </div>
  );
};

export default AdminOrdersPage;
