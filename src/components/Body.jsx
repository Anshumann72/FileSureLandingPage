import React from "react";
import Accordian from "./Accordian";
import { List } from "lucide-react";
import Lists from "./Lists";
import ProjectShowcase from "./ProjectShowcase";
import { AppDevelopmentStages } from "./StageItem";
import { OurTeam } from "./OurTeam";
import { FAQSection } from "./FAQSection";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <div className="border-t-2 border-b-2 border-black-300 pt-12 pb-12 mt-18 mb-18 bg-white">
        <div className="flex justify-center space-x-28  bg-white">
          <img src="/assets/planet.png" alt="Logo" className="h-18 w-20" />
          <img src="/assets/planet.png" alt="Logo" className="h-18 w-20" />
          <img src="/assets/planet.png" alt="Logo" className="h-18 w-20" />
          <img src="/assets/planet.png" alt="Logo" className="h-18 w-20" />
          <img src="/assets/planet.png" alt="Logo" className="h-18 w-20" />
          <img src="/assets/planet.png" alt="Logo" className="h-18 w-20" />
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row bg-white py-16 px-8 rounded-2xl  mb-16">
        <div className="flex flex-col w-full lg:w-full mt-24">
          {" "}
          <div className="text-left mb-8 mr-28 ml-20 pr-28  ">
            <h1 className="text-black-500 font-bold text-2xl pb-5 pl-5">
              Full Development Cycle
            </h1>
            <p className="text-black text-sm pb-5 pl-5 ">
              We Use Proven Technologies
            </p>
            <h3 className="text-black-500 font-bold text-lg pb-5 pl-5">Web</h3>
            <p className="mt-1 pl-5 mb-5 text-gray-700">
              PHP/Javascript/ Node.JS / Web Socket/Socket.io/Vue.js/
              Nuxt/MySQL/Laravel/GO lang/django/Python
            </p>
            <h3 className="text-black-500 font-bold text-lg pb-5 pl-5">
              Mobile
            </h3>
            <p className="mt-1 pl-5 text-gray-700 ">
              Swift/Kotlin/Alamofire/Firebase / CoreData / Room/ Realm /
              Coroutine/RxJava/RxSwift/Unit Test / Navigation
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center mr-20">
          <Accordian />
        </div>
      </div>
      <Lists />
      <ProjectShowcase />
      <AppDevelopmentStages />
      <OurTeam />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Body;
