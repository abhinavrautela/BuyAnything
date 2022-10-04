import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useMemo } from "react";
import Input from "./Input";
import Error from "./Error";
import axios from "axios";
import { UserDetailContext } from "../App";

const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string()
    .required("required")
    .min(8, "at least 8 characters")
    .max(12, "at most 12 characters"),
});

const LoginPage = ({
  setUser,
  error,
  setError,
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

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-1">
     {error && <Error loginError/>}
      <div className="w-[60%] lg:w-[45%] p-3 md:p-10 bg-gray-50 rounded-md shadow-lg ">
        <div className="flex  w-full items-center justify-between">
          <h1 className="font-thin text-sm md:text-2xl lg:text-4xl text-gray-700">
            Hello there, welcome back
          </h1>
          <div className="rounded-full text-base md:text-lg text-gray-700 border border-gray-700 inline-block opacity-60 hover:opacity-100 bg-transparent ">
            <Link to="/">
              <IoIosArrowRoundBack />
            </Link>
          </div>
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

export const EnhancedLogin = withFormik({
  handleSubmit: (values, { props }) => {
    axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("then")
        props.setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error)=>{if(error){
        props.setError(true)
      }});
  },
  validateOnMount: true,
  validationSchema: schema,
  initialValues: {
    email: "",
    password: "",
  },
})(LoginPage);
export default LoginPage;
