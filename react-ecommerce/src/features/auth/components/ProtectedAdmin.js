import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { selectUser } from "../authSlice";
import { Navigate } from "react-router-dom";

// as a wrapper around other pages
const ProtectedAdmin = ({children}) => {
    const user = useSelector(selectUser);

    if(user && user.role !== "admin"){
        return <Navigate to={"/login"} replace="true"></Navigate>
    }
    if(!user){
        return <Navigate to={"/login"} replace="true"></Navigate>
    }
  return children;
};

export default ProtectedAdmin;
