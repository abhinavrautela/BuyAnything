import React from "react";
import { MdError, MdVerified } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { withAlert } from "./withProvider";
import { useEffect } from "react";



const Alert = ({ alert, removeAlert }) => {
  useEffect(()=> {
    if(alert){
     const timeout = setTimeout(removeAlert, 3 * 1000)
     return () => clearTimeout(timeout)
    }
  }, [alert])
const themeMap = {
  success: {
    borderColor: "border-green-500",
    Icon: {
      name: MdVerified,
      color: "text-green-500",
    },
  },
  error: {
    borderColor: "border-red-700",
    Icon: {
      name: MdError,
      color: "text-red-800",
    },
  },
};
  const { type, message } = alert;
  const theme = themeMap[type];

  return (
    <div
      className={`lg:w-[35%] bg-white border-t-2 px-1 lg:px-3 flex justify-between ${theme.borderColor}`}
    >
      <h1 className="lg:text-base text-xs font-poppins text-gray-500 flex items-center">
        <span className={`mr-3 ${theme.Icon.color}`}>
          <theme.Icon.name />
        </span>
        {message}
      </h1>
      <div className="">
        <button
          className="p-0.5 rounded-full ring-1 ring-transparent ring-offset-1 hover:border-primary hover:ring-primary opacity-50 hover:opacity-100"
          onClick={removeAlert}
        >
          <ImCross size={10}/>
        </button>
      </div>
    </div>
  );
};

export default withAlert(Alert);
