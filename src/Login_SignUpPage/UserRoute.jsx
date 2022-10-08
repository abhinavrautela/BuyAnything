import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { withUser } from "../Alert_User_ContextProvider/withProvider";

const UserRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  } else return children;
};

export default withUser(UserRoute);
