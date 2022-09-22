import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useMemo } from "react";
import Input from "./Input";

const LoginPage = () => {
  const [visiblePswd, setVisiblePswd] = useState(false);
  const [type, setType] = useState("");
  useMemo(() => {
    if (visiblePswd) {
      setType("text");
    } else {
      setType("password");
    }
  }, [visiblePswd]);

  const onFormSubmit = () => {
    console.log("request send");
  };

  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string()
      .required("required")
      .min(8, "at least 8 characters")
      .max(12, "at most 12 characters"),
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
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={onFormSubmit}
          validationSchema={schema}
          validateOnMount
        >
          {({ isValid }) => (
            <Form className="mt-4 space-y-6">
              <Input
                icon={<AiOutlineMail />}
                name="email"
                type="email"
                autocomplete="email"
                id="email"
                placeholder="Email"
                required={true}
              />
              <Input
                icon={<RiLockPasswordLine />}
                name="password"
                label="Password"
                id="password"
                type={type}
                autocomplete="password"
                required={true}
                placeholder="Password"
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
