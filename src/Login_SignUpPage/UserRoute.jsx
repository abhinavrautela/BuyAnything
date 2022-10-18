import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { withUser } from "../ContextProvider/withProvider";

const UserRoute = ({user, isLoggedIn, children }) => {
  useEffect(() => {
    if (!isLoggedIn) {
      return children;
    } else return <Navigate to="/" />;
  }, []);
};

export default withUser(UserRoute);
