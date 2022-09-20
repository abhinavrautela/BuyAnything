import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useMemo } from "react";

const LoginPage = () => {
  const [visiblePswd, setVisiblePswd] = useState(false)
  const [type, setType] = useState("")
  useMemo(()=> {
     if (visiblePswd) {
       setType("text");
     } else {
       setType("password");
     }
  }, [visiblePswd])
 

  const onFormSubmit = (values) => {
    console.log(
      "request send",
      values.email,
    );
  };

  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string()
      .required("required")
      .min(8, "password must be at least 8 characters")
      .max(12, "password must be at most 12 characters"),
  });
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    onSubmit: onFormSubmit,
    validationSchema: schema,
  });
  return (
    <div className="flex justify-center items-center h-screen">
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
          <div className="space-y-5">
            <div className="border-b-2 border-gray-500  hover:border-primary py-2 px-1">
              <div className="relative flex items-center space-x-4">
                <AiOutlineMail />
                <label htmlFor="email" className="sr-only">
                  name address
                </label>
                <input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  autocomplete="email"
                  required
                  className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              {errors.email && touched.email && (
                <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="border-b-2 border-gray-500  hover:border-primary py-2 px-1 ">
              <div className="relative flex items-center space-x-4">
                <RiLockPasswordLine />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={type}
                  autocomplete="password"
                  required
                  className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
                  placeholder="Password"
                />
                {visiblePswd ? (
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
                )}
              </div>
              {errors.password && touched.password && (
                <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
                  {errors.password}
                </div>
              )}
            </div>
          </div>

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

export default LoginPage;
