import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserDetailContext } from '../App';


const UserRoute = ({ children }) => {
 const { user } = useContext(UserDetailContext);
  if (!user) {
    return <Navigate to="/login" />;
  } else return children;
};

export default UserRoute