import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";

const ForgotPswdPage = () => {
  const onFormSubmit = () => {
    console.log("request send");
  };

  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
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
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={onFormSubmit}
          validationSchema={schema}
          validateOnMount
        >
        {({isValid}) =>
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
          </Form>}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPswdPage;
