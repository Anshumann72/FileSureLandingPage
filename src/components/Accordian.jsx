import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordian = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>iOS development</AccordionTrigger>
          <AccordionContent>
            Dummy content for iOS development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Android development</AccordionTrigger>
          <AccordionContent>
            Dummy content for Android development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Web development</AccordionTrigger>
          <AccordionContent>
            Dummy content for Web development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>UI/UX design</AccordionTrigger>
          <AccordionContent>Dummy content for UI/UX design.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Testing</AccordionTrigger>
          <AccordionContent>Dummy content for Testing.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Launch</AccordionTrigger>
          <AccordionContent>Dummy content for Launch.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>IT consulting</AccordionTrigger>
          <AccordionContent>Dummy content for IT consulting.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordian;
