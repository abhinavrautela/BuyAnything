import React from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[60%] lg:w-[45%] p-3 md:p-10  bg-gray-50 rounded-md shadow-lg space-y-3">
          <div className="flex  w-full items-center justify-between">
            <h1 className="font-thin text-sm md:text-2xl lg:text-4xl text-gray-700">
              AboutUs
            </h1>
            <div className="rounded-full text-base md:text-lg text-gray-700 border border-gray-700 inline-block opacity-60 hover:opacity-100 bg-transparent ">
              <Link to="/">
                <IoIosArrowRoundBack size={40}/>
              </Link>
            </div>
          </div>
          <h1 className='font-poppins text-base lg:text-3xl text-gray-700 p-10 underline '>We don&#39;t brag about ourselves</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs