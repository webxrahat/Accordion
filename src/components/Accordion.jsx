import React, { useState } from "react";
import { MdSwipeDown } from "react-icons/md";

const Accordion = () => {
 const [isHover, setIsHover] = useState(false);

 const handleMouseHover = () => {
  setIsHover(true);
 };

 console.log(isHover);

 return (
  <div>
   <div className="max-w-3xl mx-auto">
    <div
     onMouseEnter={handleMouseHover}
     className="flex w-full justify-between flex-row-reverse bg-gray-100"
    >
     <MdSwipeDown size={30} color="green" />
     <h2 className="text-xl">Question</h2>
    </div>
    <div className={`${isHover ? "visible" : "invisible"}`}>
     <p>Answer</p>
    </div>
   </div>
  </div>
 );
};

export default Accordion;
