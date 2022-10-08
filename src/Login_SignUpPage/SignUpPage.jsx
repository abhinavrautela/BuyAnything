import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";

import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikInput } from "./Input";
import axios from "axios";
import {
  withAlert,
  withUser,
} from "../Alert_User_ContextProvider/withProvider";
import Alert from "../Alert_User_ContextProvider/Alert";

const SignUpPage = ({ alert, setAlert, setUser }) => {
  const [visiblePswd, setVisiblePswd] = useState(false);
  const [type, setType] = useState("");
  useEffect(() => {
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
    axios
      .post("https://myeasykart.codeyogi.io/signup", {
        fullName: values.name,
        email: values.email,
        password: values.confirm_password,
      })
      .then((response) => {
        localStorage.setItem("MyToken", response.data.token);
        setUser(response.data.user);
        setAlert({ type: "success", message: "Thanks For Signing Up" });
      })
      .catch((error) => {
        if (error) {
          setAlert({ type: "error", message: "SignUp Failed" });
        }
      });
  };

  const schema = Yup.object().shape({
    name: Yup.string().required().min(3, "at least 3 character"),
    email: Yup.string().required().email(),
    create_password: Yup.string()
      .required("required")
      .min(8, "at least 8 characters")
      .max(12, "at most 12 characters"),
    confirm_password: Yup.string()
      .required("required")
      .min(8, "at least 8 characters")
      .max(12, "at most 12 characters")
      .oneOf([Yup.ref("create_password"), null], "Passwords must match"),
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-1">
      {alert && <Alert />}
      <div className="w-[60%] lg:w-[45%] p-3 md:p-10 bg-gray-50 rounded-md shadow-lg ">
        <div className="w-full ">
          <h1 className="font-thin text-sm md:text-2xl lg:text-4xl text-gray-700">
            Get On Board
          </h1>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            create_password: "",
            confirm_password: "",
          }}
          onSubmit={onFormSubmit}
          validationSchema={schema}
          validateOnMount
        >
          {({ isValid }) => (
            <Form className="mt-4 space-y-6">
              <div className="space-y-5">
                <FormikInput
                  name="name"
                  icon={<AiOutlineUser />}
                  label="Name"
                  id="name"
                  type="text"
                  autoComplete="name"
                  required={true}
                  placeholder="Name"
                />
                <FormikInput
                  id="email"
                  icon={<AiOutlineMail />}
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={true}
                  placeholder="Email Address"
                />
                <FormikInput
                  id="create password"
                  icon={<RiLockPasswordLine />}
                  label="Create Password"
                  name="create_password"
                  type={type}
                  autoComplete="password"
                  required={true}
                  placeholder="Create Password"
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

                <FormikInput
                  id="confirm password"
                  icon={<RiLockPasswordLine />}
                  label="Confirm Password"
                  name="confirm_password"
                  type="password"
                  autoComplete="password"
                  required={true}
                  placeholder="Confirm Password"
                />
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
                  <Link to="/login">LogIn</Link>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withAlert(withUser(SignUpPage));
