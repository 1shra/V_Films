import React from "react";
import { Link } from "react-router-dom";
import Gp9 from "../assets/Group 9.png";
import Gp2 from "../assets/Group 2.svg";
import img20 from "../assets/tim.svg";
import Vector from "../assets/Vector2.svg";
import Frame4 from "../assets/Frame4.png";
import Vector9 from "../assets/Vector9.svg";

const TheirStory = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-20">
      
      {/* Left Section */}
      <div className="flex flex-col items-center">
        <img
          className="w-[500px] h-[400px] -mt-11 ml-10 object-contain"
          src={Gp9}
          alt="Branding"
        />

        <div className="absoulte flex items-center bottom-0 left-10">
          <div className="hidden md:block absolute bottom-0 left-[5%] opacity-100 w-[30vw] pointer-events-none max-h-[250px]">
          <img className="w-[250px] h-[250px] ml-10" src={img20} alt="Tim" />
        </div>
          
          
          <div className="flex flex-col items-center ml-14">
            <p className="text-[35px] text-center pb-2 pl-9" style={{fontFamily:"Island Moments"}}>
              Branding Experts
            </p>
            <img className="h-[163px] w-[198px] -mt-6 mr-5" src={Vector} alt="Vector" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center text-center">
        <p className="text-[35px] mt-10" style={{fontFamily:"Island Moments"}}>Film Makers</p>
        <img className="mt-1 w-[100px] h-[80px] ml-20" src={Vector9} alt="Vector9" />

        <img className="w-[500px] h-[300px] mt-4" src={Gp2} alt="Gp2" />

        <p className="text-[30px] mt-8 leading-snug w-[586px]" style={{fontFamily: "Halant"}} >
          Take a closer look at the stories V bring to life.
        </p>

        <Link to="/varman">
          <img
            className="ml-40 mt-6 cursor-pointer hover:scale-105 transition-transform"
            src={Frame4}
            alt="Go to next page"
          />
        </Link>
      </div>
    </div>
  );
};

export default TheirStory;
