import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync, selectUser } from "../authSlice";
import { Navigate } from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(()=>{
        dispatch(logoutUserAsync())
    }, [dispatch]);
  return <div>
    Cleaning Your Data From Server...
    {!user && <Navigate to={"/"} replace={true}></Navigate>}
  </div>;
};

export default Logout;
