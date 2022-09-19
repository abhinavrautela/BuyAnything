import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[40%] p-10 bg-gray-200 rounded-md shadow-lg ">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-thin text-lg md:text-2xl lg:text-4xl text-gray-700">
            Get On Board
          </h1>
          <div className="rounded-full text-gray-700 border border-gray-700 inline-block opacity-60 hover:opacity-100 bg-transparent">
            <Link to="/">
              <IoIosArrowRoundBack size={27} />
            </Link>
          </div>
        </div>
        <form class="mt-4 space-y-6">
          <div class="space-y-5">
            <div>
              <label htmlFor="name" class="sr-only">
                name address
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autocomplete="name"
                required
                class="relative block w-full appearance-none  border-b-2 border-gray-500  bg-transparent  py-2 text-gray-900 placeholder-gray-700 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" class="sr-only">
                name address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full appearance-none  border-b-2 border-gray-500 bg-transparent  py-2 text-gray-900 placeholder-gray-700 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none  border-b-2 border-gray-500 bg-transparent  py-2 text-gray-900 placeholder-gray-700 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none  border-b-2 border-gray-500 bg-transparent  py-2 text-gray-900 placeholder-gray-700 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div></div>

            <div class="text-sm">
              <Link
                to="/forgotPswd"
                class="font-medium text-gray-600 hover:text-primary"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border-b border-transparent bg-primary py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
          <div class="text-sm flex items-center space-x-2">
            <h1 className="text-gray-400">Already a member?</h1>
            <span className="font-medium text-gray-600 underline hover:text-primary">
              <Link to="/forgotPswd">LogIn</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
