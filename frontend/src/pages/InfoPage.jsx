import React, { useState, useEffect } from "react";
import { safetyInfoData } from "../assets/data";
import { AccordionItem } from "../components/AccordionItem";

export function InfoPage() {
  /* ... No changes from previous accordion logic ... */
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="space-y-4">
      {safetyInfoData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
