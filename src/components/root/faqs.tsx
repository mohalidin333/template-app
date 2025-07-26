"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQs } from "@/constants/root";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="section">
      <div className="section-container">
        <div className="section-sub-container">
          <span className="badge-gray">FAQs</span>
          <h1 className="title-bold-xl">Frequently Asked Questions</h1>
          <p className="sub-title-lg">
            Got questions about QSoftX? Find answers to the most common
            questions about our full stack development template.
          </p>
        </div>

        <div className="space-y-6">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-md border overflow-hidden"
            >
              <button
                className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="title-semi-md">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <p className="sub-title-base px-6 py-4 border-t">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
