import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserDetailContext } from "../App";
const AuthRoute = ({ children }) => {
const { user } = useContext(UserDetailContext);
  if (user) {
    return <Navigate to="/"/>
  } else return children;
}

export default AuthRoute;
