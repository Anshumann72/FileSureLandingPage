import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the cost of a mobile application?",
    answer:
      "The cost varies depending on the complexity and features of the application. Please contact us for a detailed quote.",
  },
  {
    question: "How long will development take?",
    answer:
      "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer. Average development time from start to finished application: Medium projects up to 3 months. Large projects about 4-6 months. To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
  },
  {
    question: "Do you provide a guarantee for the mobile application?",
    answer:
      "Yes, we provide a warranty period for our mobile applications. The specific terms of the guarantee can be discussed during the project planning phase.",
  },
  {
    question: "I will not tell my idea, do you guarantee confidentiality?",
    answer:
      "Yes, we guarantee confidentiality for all client ideas and projects. We can sign a Non-Disclosure Agreement (NDA) before discussing your project in detail.",
  },
];

export function FAQSection() {
  return (
    <div className=" text-left mb-8 mr-28 ml-20 pr-28 p-6">
      <h2 className="text-3xl font-bold mb-6">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <span className="font-semibold text-gray-800">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
