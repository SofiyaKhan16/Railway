import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMessageSquare } from "react-icons/fi";
import TrainImg from "../assets/logoheadway.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
   
      <nav
        className={`h-[70px]  fixed  w-full z-[100] font-sans ${
          scrolling ? "bg-gray-200" : "bg-transparent"
        }`}
        >
        <div className="h-full w-full flex justify-center ">
          <div className="h-full flex items-center justify-around w-full  ">
            <img src={TrainImg}  className="w-44 h-32 mt-4  "/>
            <div className="flex h-full justify-center items-center ">
              <Link
                to="home"
                className="text-2xl text-black font-medium mx-3 cursor-pointer hover:text-blue-950 hover:border-b-2 hover:border-blue-950 hover:font-semibold"
              >
                Home
              </Link>
              <Link
                to="service"
                className="text-2xl text-black font-medium mx-3 cursor-pointer hover:text-blue-950 hover:border-b-2 hover:border-blue-950 hover:font-semibold"
              >
                Service
              </Link>
              <Link
                to="about"
                className="text-2xl text-black font-medium mx-3 cursor-pointer hover:text-blue-950 hover:border-b-2 hover:border-blue-950 hover:font-semibold"
              >
                About us
              </Link>
              <Link
                to="contact"
                className="text-2xl text-black font-medium mx-3 cursor-pointer hover:text-blue-950 hover:border-b-2 hover:border-blue-950 hover:font-semibold"
              >
                Contact
              </Link>
            </div>
            {/* <button className="text-xl p-2 border  flex items-center rounded-3xl border-black text-white bg-blue-900 ">
              <FiMessageSquare className="mx-2" />{" "}
              <Link to="contact"> Contact Us </Link>
            </button> */}
          </div>
        </div>
      </nav>
   
  );
};

export default Navbar;
