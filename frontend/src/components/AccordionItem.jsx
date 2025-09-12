import { ChevronDown } from "lucide-react";

export const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800"
    >
      <span>{title}</span>
      <ChevronDown
        className={`w-5 h-5 transition-transform transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className="overflow-hidden transition-all duration-500 ease-in-out"
      style={{ maxHeight: isOpen ? "200px" : "0" }}
    >
      <p className="p-5 pt-0 text-slate-600">{content}</p>
    </div>
  </div>
);
