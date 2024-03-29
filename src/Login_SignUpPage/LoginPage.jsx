import React from "react";
import { Link, Navigate } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

import { RiLockPasswordLine } from "react-icons/ri";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useMemo } from "react";
import Input from "./Input";

import axios from "axios";
import { withAlert, withUser } from "../ContextProvider/withProvider";
import Alert from "../ContextProvider/Alert";

const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string()
    .required("required")
    .min(8, "at least 8 characters")
    .max(12, "at most 12 characters"),
});

export const LoginPage = ({
  user,
  alert,
  values,
  isValid,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  const [visiblePswd, setVisiblePswd] = useState(false);
  const [type, setType] = useState("");
  useMemo(() => {
    if (visiblePswd) {
      setType("text");
    } else {
      setType("password");
    }
  }, [visiblePswd]);

  if (user.id) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-1">
      {alert && <Alert />}

      <div className="w-[60%] lg:w-[45%] p-3 md:p-10 bg-gray-50 rounded-md shadow-lg ">
        <div className="flex  w-full items-center justify-between">
          <h1 className="font-thin text-sm md:text-2xl lg:text-4xl text-gray-700">
            Hello there, Welcome
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <Input
            icon={<AiOutlineMail />}
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            name="email"
            type="email"
            autoComplete="email"
            id="email"
            placeholder="Email"
            required={true}
          />
          <Input
            icon={<RiLockPasswordLine />}
            values={values.password}
            name="password"
            label="Password"
            id="password"
            type={type}
            autoComplete="password"
            required={true}
            placeholder="Password"
            onChange={handleChange}
            touched={touched.password}
            onBlur={handleBlur}
            error={errors.password}
            inputPswdLogic={
              visiblePswd ? (
                <button
                  className="outline-none"
                  type="button"
                  onClick={() => setVisiblePswd(false)}
                >
                  <AiOutlineEye size={20} />
                </button>
              ) : (
                <button
                  className="outline-none"
                  type="button"
                  onClick={() => setVisiblePswd(true)}
                >
                  <AiOutlineEyeInvisible size={20} />
                </button>
              )
            }
          />

          <div className="flex items-center justify-between">
            <div className="hidden md:block"></div>
            <div className="text-sm">
              <Link
                to="/forgetPswd"
                className="font-poppins text-gray-400 hover:text-primary"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="group relative flex w-full justify-center rounded-md border-b border-transparent bg-primary py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:opacity-50 disabled:text-gray-400"
            >
              Log In
            </button>
          </div>
          <div className="text-xs md:text-sm flex lg:w-full lg:justify-center ">
            <h1 className="text-gray-400">
              New Here &#63;
              <span className="font-medium text-gray-500 underline hover:text-primary mx-1">
                <Link to="/signuppage">SignUp</Link>
              </span>
              instead
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

const EnhancedLogin = withFormik({
  handleSubmit: (values, { props }) => {
    axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        props.setUser(response.data.user);
        localStorage.setItem("MyToken", response.data.token);
        props.setAlert({ type: "success", message: "LoggedIn Successfully" });
      })
      .catch((error) => {
        if (error) {
          props.setAlert({ type: "error", message: "Invalid" });
        }
      });
  },
  validateOnMount: true,
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  },
})(LoginPage);
export default withAlert(withUser(EnhancedLogin));
