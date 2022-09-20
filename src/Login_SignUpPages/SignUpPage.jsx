import React, {useMemo, useState} from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpPage = () => {
   const [visiblePswd, setVisiblePswd] = useState(false);
   const [type, setType] = useState("");
   useMemo(() => {
     if (visiblePswd) {
       setType("text");
     } else {
       setType("password");
     }
   }, [visiblePswd]);
  const onFormSubmit = (values) => {
    console.log(
      "request send",
      values.email,
      values.name,
      values.create_password
    );
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    create_password: Yup.string()
      .required("required")
      .min(8, "password must be at least 8 characters")
      .max(12, "password must be at most 12 characters"),
    confirm_password: Yup.string()
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
      name: "",
      email: "",
      create_password: "",
      confirm_password: "",
    },
    onSubmit: onFormSubmit,
    validationSchema: schema,
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%] lg:w-[45%] p-3 md:p-10 bg-gray-50 rounded-md shadow-lg ">
        <div className="flex  w-full items-center justify-between">
          <h1 className="font-thin text-sm md:text-2xl lg:text-4xl text-gray-700">
            Get On Board
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
                <AiOutlineUser />
                <label htmlFor="name" className="sr-only">
                  name address
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="name"
                  autocomplete="name"
                  required
                  className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
                  placeholder="Name"
                />
              </div>
              {errors.name && touched.name && (
                <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
                  {errors.name}
                </div>
              )}
            </div>
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
                  name="create_password"
                  value={values.create_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={type}
                  autocomplete="current-password"
                  required
                  className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
                  placeholder="Create Password"
                />
                {visiblePswd ? (
                  <button type="button" onClick={() => setVisiblePswd(false)}>
                    <AiOutlineEye size={20} />
                  </button>
                ) : (
                  <button type="button" onClick={() => setVisiblePswd(true)}>
                    <AiOutlineEyeInvisible size={20} />
                  </button>
                )}
              </div>
              {errors.create_password && touched.create_password && (
                <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
                  {errors.create_password}
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
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  autocomplete="current-password"
                  required
                  className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              {errors.confirm_password && touched.confirm_password && (
                <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
                  {errors.confirm_password}
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-xs font-thin">
              By creating an account, you agree to the{" "}
              <Link to="tnc" className="underline">
                T&#38;C
              </Link>{" "}
              and{" "}
              <Link to="tnc" className="underline">
                Privacy Policy
              </Link>{" "}
            </h1>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="group relative flex w-full justify-center rounded-md border-b border-transparent bg-primary py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:opacity-50 disabled:text-gray-400"
            >
              Sign Up
            </button>
          </div>
          <div className="text-xs md:text-sm flex lg:w-full lg:justify-center items-center md:space-x-2">
            <h1 className="text-gray-400">Already a member?</h1>
            <span className="font-medium text-gray-500 underline hover:text-primary">
              <Link to="/logInpage">LogIn</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
