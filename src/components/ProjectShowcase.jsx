import React from "react";
import { Separator } from "@/components/ui/separator";
import { MapPin, Building } from "lucide-react";
import ContactForm from "./ContactForm";

const ProjectShowcase = () => {
  return (
    <>
      <div className=" mt-6 p-6 bg-white mr-28 ml-20 ">
        <h1 className="text-3xl font-bold mb-2">Projects we are proud of</h1>
        <p className="text-gray-600 mb-12">
          Our software development company is truly proud of the wonderful
          clients we have <br></br>worked with. We enjoy a long-term partnership
        </p>

        <div className="flex space-x-4 mb-6">
          <span className="font-semibold border-b-2 border-yellow-400 ">
            Project 1
          </span>
          <span className="text-gray-500">Project 2</span>
          <span className="text-gray-500">Project 3</span>
          <span className="text-gray-500">Project 4</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-600 mb-4">
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                Businnes analysis / iOS / Android / QA / UI/UX Design
              </span>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-600">India</span>
              </div>
              <div className="flex items-center gap-1">
                <Building className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-600">Real Estate</span>
              </div>
            </div>

            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-2xl font-bold">400%</p>
                <p className="text-sm text-gray-600">User Growth</p>
              </div>
              <div>
                <p className="text-2xl font-bold">+ 200 000</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/assets/apple.png" alt="App Store" className="h-10" />
              <img
                src="/assets/google.png"
                alt="Google Play"
                className="h-10"
              />
            </div>
          </div>

          <div className="flex-1">
            <div>
              <img
                src="/assets/Untitled.png"
                alt="Project Screenshot"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-yellow-400 to-green-400 mt-6 pt-6">
        <div className="flex-1">
          <h1 className="font-bold text-3xl text-white  text-left mb-8 mr-28 ml-20 pr-28 mt-12">
            Let's discuss <br></br>Your project
          </h1>
          <p className="mt-4 text-white text-left mb-8 mr-28 ml-20 pr-28">
            Let's figure out how to create an effective application, <br></br>
            its cost, and terms of its development
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
