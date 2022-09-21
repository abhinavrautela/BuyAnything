import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPswdPage = () => {
      const onFormSubmit = (values) => {
        console.log("request send", values.email);
      };

      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
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
        },
        onSubmit: onFormSubmit,
        validationSchema: schema,
      });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%] lg:w-[45%] p-3 md:p-10 bg-gray-50 rounded-md shadow-lg space-y-3">
        <div className="flex  w-full items-center justify-between">
          <h1 className="font-thin text-sm md:text-2xl lg:text-4xl text-gray-700">
            Password Help
          </h1>
          <div className="rounded-full text-base md:text-lg text-gray-700 border border-gray-700 inline-block opacity-60 hover:opacity-100 bg-transparent ">
            <Link to="/">
              <IoIosArrowRoundBack />
            </Link>
          </div>
        </div>
        <div className="text-xs font-poppins tracking-tighter">
          Enter your email address. You will receive an email with a link to
          reset your password.
        </div>
        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div className="border-b-2 border-gray-500  hover:border-primary py-2 px-1">
            <div className="relative flex items-center space-x-4">
              <AiOutlineMail />
              <label htmlFor="email" className="sr-only">
                email address
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
                className="relative block w-full appearance-none   bg-transparent   text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            {errors.email && touched.email && (
              <div className="absolute mt-3 ml-8 text-xs font-poppins text-red-600">
                {errors.email}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="hidden md:block"></div>
            <div className="text-sm">
              <Link
                to="/logInPage"
                className="font-poppins text-gray-400 hover:text-primary"
              >
                Back To LogIn
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="group relative flex w-full justify-center rounded-md border-b border-transparent bg-primary py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:opacity-50 disabled:text-gray-400"
            >
              Get Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPswdPage;