import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { selectUser } from "../authSlice";
import { Navigate } from "react-router-dom";

// as a wrapper around other pages
const Protected = ({children}) => {
    const user = useSelector(selectUser);

    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }
  return children;
};

export default Protected;
