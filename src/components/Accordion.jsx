import React, { useState } from "react";
import { MdSwipeDown } from "react-icons/md";

const quizs = [
 {
  question: "What is the capital of France?",
  answer: "Paris",
 },
 {
  question: "Who wrote the play 'Romeo and Juliet'?",
  answer: "William Shakespeare",
 },
 {
  question: "What is the smallest planet in our solar system?",
  answer: "Mercury",
 },
 {
  question: "What is the process by which plants make their own food?",
  answer: "Photosynthesis",
 },
 {
  question: "Who is known as the father of modern physics?",
  answer: "Albert Einstein",
 },
 {
  question: "What is the chemical symbol for water?",
  answer: "H2O",
 },
];

const Accordion = () => {
 const [isHover, setIsHover] = useState(false);

 const handleMouseHover = () => {
  setIsHover(true);
 };

 //  console.log(isHover);

 return (
  <div>
   {quizs.map((qus, index) => (
    <div key={index} className="max-w-3xl mx-auto">
     <div
      onMouseEnter={handleMouseHover}
      className="flex w-full justify-between flex-row-reverse bg-gray-100"
     >
      <MdSwipeDown size={30} color="green" />
      <h2 className="text-xl">{qus.question}</h2>
     </div>
     <div className={`${isHover ? "visible" : "invisible"}`}>
      <p>Answer</p>
     </div>
    </div>
   ))}
  </div>
 );
};

export default Accordion;
