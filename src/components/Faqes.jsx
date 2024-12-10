import React, { useState } from "react";
import { PiArrowCircleDownFill } from "react-icons/pi";
import { AiFillFire } from "react-icons/ai";

import image from "../assets/y-so-serious.png";

const datas = [
 {
  id: 1,
  question: "What is WordPress used for?",
  answer:
   "WordPress is a content management system (CMS) used to create and manage websites, blogs, e-commerce stores, and other types of online content.",
 },
 {
  id: 2,
  question: "What are the benefits of using WordPress?",
  answer:
   "WordPress offers flexibility, ease of use, a large library of themes and plugins, SEO optimization capabilities, and a strong community for support.",
 },
 {
  id: 3,
  question: "Difference between WordPress.com and WordPress.org?",
  answer:
   "WordPress.com is a hosted platform, while WordPress.org allows you to self-host your website, offering greater customization and control.",
 },
 {
  id: 4,
  question: "Can I use WordPress to build an e-commerce site?",
  answer:
   "Yes, you can build e-commerce sites using WordPress with plugins like WooCommerce, which adds features like product management and payment integration.",
 },
 {
  id: 5,
  question: "Do I need coding skills to use WordPress?",
  answer:
   "No, WordPress is beginner-friendly, but coding skills can help you customize your site further.",
 },
 {
  id: 6,
  question: "Is WordPress secure for my website?",
  answer:
   "Yes, WordPress is secure when kept up-to-date and using reputable themes, plugins, and hosting. Additional security plugins can enhance protection.",
 },
];

const Faqes = () => {
 const [isHover, setIsHover] = useState(null);

 return (
  <div
   className="pt-20"
   style={{
    backgroundImage: `linear-gradient(190deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 100%), url(${image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
   }}
  >
   {datas.map((d, index) => (
    <div key={index} className="w-1/3 mx-auto ">
     <div
      onMouseEnter={() => setIsHover(index)}
      className="cursor-pointer hover:bg-gradient-to-b transition duration-700 ease-in-out hover:from-[#151a47] hover:via-[#162ea2] hover:to-[#10104d] text-xl flex items-center justify-between bg-gradient-to-b from-[#020024] via-[#090979] to-[#1111c2] text-yellow-500 py-5 px-2 rounded-md"
     >
      <div className="flex items-center">
       <AiFillFire size={25} />
       <h2 className="ml-3">{d.question}</h2>
      </div>
      <PiArrowCircleDownFill size={25} />
     </div>
     <div
      className={`bg-[#020024] text-yellow-50 py-1 px-3 transition-all ease-in-out duration-700 ${
       isHover === index
        ? "opacity-100 max-h-[500px] pt-4 pb-2"
        : "opacity-0 max-h-0"
      } overflow-hidden`}
     >
      <p>{d.answer}</p>
     </div>
    </div>
   ))}
  </div>
 );
};

export default Faqes;
