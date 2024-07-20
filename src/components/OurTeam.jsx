import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function OurTeam() {
  return (
    <div className=" text-left mb-8 mr-28 ml-20 pr-28 p-6 bg-gray-50 mt-6">
      <div className="flex flex-col md:flex-row gap-28 ">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our team</h2>
          <p className="text-gray-600">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>

          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">28</p>
              <p className="text-sm text-gray-500">team members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">+100</p>
              <p className="text-sm text-gray-500">projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">7 years</p>
              <p className="text-sm text-gray-500">in IT sphere</p>
            </div>
          </div>

          <p className="text-gray-600">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It's
            expensive but worth it
          </p>
        </div>

        <div className="flex-1 flex justify-end ">
          <Card className="w-full max-w-md overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <img
                src="/assets/Team.png"
                alt="Our Team"
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
