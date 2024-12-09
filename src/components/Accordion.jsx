import React, { useState } from "react";
import { MdSwipeDown } from "react-icons/md";

const quizs = [
 { id: 1, question: "What is the capital of France?", answer: "Paris" },
 {
  id: 2,
  question: "Who wrote the play 'Romeo and Juliet'?",
  answer: "William Shakespeare",
 },
 {
  id: 3,
  question: "What is the smallest planet in our solar system?",
  answer: "Mercury",
 },
 {
  id: 4,
  question: "What is the process by which plants make their own food?",
  answer: "Photosynthesis",
 },
 {
  id: 5,
  question: "Who is known as the father of modern physics?",
  answer: "Albert Einstein",
 },
 { id: 6, question: "What is the chemical symbol for water?", answer: "H2O" },
];

const Accordion = () => {
 const [hoveredId, setHoveredId] = useState(null);

 return (
  <div>
   {quizs.map((qus) => (
    <div key={qus.id} className="max-w-3xl mx-auto my-4">
     <div
      onMouseEnter={() => setHoveredId(qus.id)}
      onMouseLeave={() => setHoveredId(null)}
      className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer"
     >
      <MdSwipeDown size={30} color="green" />
      <h2 className="text-xl">{qus.question}</h2>
     </div>
     <div
      className={`transition-opacity duration-700 ${
       hoveredId === qus.id ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
     >
      <p className="bg-gray-50 p-4">{qus.answer}</p>
     </div>
    </div>
   ))}
  </div>
 );
};

export default Accordion;
