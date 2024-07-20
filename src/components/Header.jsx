import React from "react";
import ContactForm from "./ContactForm";
import Hero from "@/components/Hero";

const Header = () => {
  return (
    <>
      <Hero />
      <div className="relative flex flex-col lg:flex-row bg-white py-16 px-8 rounded-2xl  mb-16">
        <div className="flex flex-col w-full lg:w-full mt-24">
          {" "}
          <div className="text-left mb-8 mr-28 ml-20 pr-28  ">
            <h1 className="text-yellow-500 font-bold text-3xl">
              User-Centric Excellence:{" "}
              <span className="text-black">
                Our <br></br> App Development Services <br></br>Tackles Your
                Pain Points
              </span>
            </h1>
            <p className="mt-4 text-gray-700">
              Experience a Seamless Digital Journey with{" "}
              <span className="text-green-800 font-bold">Desun</span> - Where
              Every Line <br></br>of Code Resolves Your Challenges and{" "}
              <span className="text-yellow-500 font-bold">
                Elevates Your App Experience <br></br>
              </span>{" "}
              to Unparalleled Heights.
            </p>
          </div>
          <ContactForm />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/assets/header.png"
            alt="Sample"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
