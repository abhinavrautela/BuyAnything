import React from "react";
import { MdError } from "react-icons/md";

const Error = ({ loginError, signupError }) => {
    let text;
  if (loginError) {
     text = "Invalid Username or Password"
  }
  if(signupError) {
 text = "This email id is already in use";
  }
  return (
    <div className="lg:w-[35%] bg-gray-100 border-t-2 border-red-700 px-1 lg:px-3">
      <h1 className="lg:text-lg text-xs font-poppins text-gray-500 flex items-center"><span className="text-red-800 mr-3"><MdError /></span>{text}</h1>
    </div>
  );
};

export default Error;
