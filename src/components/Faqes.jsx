import React from "react";
import { PiArrowCircleDownFill } from "react-icons/pi";
import { AiFillFire } from "react-icons/ai";

import image from "../assets/y-so-serious.png";

const Faqes = () => {
 return (
  <div
   className="pt-44"
   style={{
    backgroundImage: `linear-gradient(190deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 100%), url(${image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
   }}
  >
   <div className="w-1/4 mx-auto ">
    <div className=" text-xl flex items-center justify-between bg-gradient-to-b from-[#020024] via-[#090979] to-[#1111c2] text-yellow-500 py-3 px-2 rounded-md">
     <div className="flex items-center">
      <AiFillFire size={25} />
      <h2 className="ml-2">Question</h2>
     </div>
     <PiArrowCircleDownFill size={25} />
    </div>
    <div className="bg-[#020024] text-yellow-50 py-5 px-3">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, minus.</p>
    </div>
   </div>
  </div>
 );
};

export default Faqes;
