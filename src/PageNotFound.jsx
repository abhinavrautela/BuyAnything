import React from 'react';
import PageButton from "./buttons/PageButton"
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Image from "./myImg/404page.jpg";
function PageNotFound() {

    return (
        <div>
            <div className="bg-white flex justify-center items-end">
                <img className="h-screen z-0 mx-auto" src={Image} />
                <div className="z-10 absolute mb-28 flex ">
                    <Link to="/">
                <PageButton>Return To Shopping <span className="ml-3"><HiOutlineArrowNarrowRight /></span></PageButton>
                        
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default PageNotFound;