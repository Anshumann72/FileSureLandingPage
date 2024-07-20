import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "rgba(17, 17, 17, 1)" }}
      className=" text-gray-300  py-10 px-4 rounded-2xl mr-16 ml-16 mb-4 mt-8 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 flex flex-col items-center">
            <img
              src="assets/logo2.png"
              alt="Company Logo"
              className="w-34 h-24 mb-2"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="mb-2 text-gray-500">Contact nums</span>
              <span>+91 0000000000</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="mb-2 text-gray-500">Gmail</span>
              <span>demo@gmail.com</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="mb-2 text-gray-500">Adress</span>
              <span>Mumbai, India</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="mb-2 text-gray-500">Leave a request</span>
              <span>Leave a request</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          We work throughout the world
        </div>
      </div>
    </footer>
  );
};

export default Footer;
