import React from "react";
import {
  FileText,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Headphones,
} from "lucide-react";

const stages = [
  {
    icon: FileText,
    title: "Analysis",
    description:
      "We carry out technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We adapt the customers corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
  },
  {
    icon: TestTube,
    title: "Testing",
    description:
      "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
  },
  {
    icon: Rocket,
    title: "Launching",
    description:
      "We design the application page and publish it in the App Store and Google Play stores.",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
  },
];

const StageItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-3 mb-6 px-4 py-6 shadow-lg">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-green-500" />
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export function AppDevelopmentStages() {
  return (
    <>
      <h2 className="text-3xl text-left font-bold mb-12  mr-28 ml-20 pr-28 mt-16">
        Application Development Stages
      </h2>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-28 ">
            {stages.slice(0, 3).map((stage, index) => (
              <StageItem key={index} {...stage} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-purple-900 rounded-3xl overflow-hidden shadow-lg ">
              <img
                src="/assets/mob1.png"
                alt="Application Screenshot"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-28">
            {stages.slice(3).map((stage, index) => (
              <StageItem key={index + 3} {...stage} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
