import { useState } from "react";
import { PlusCircle, Box } from "lucide-react";
import { resourceRequestsData } from "../assets/data";
// --- NEW RESOURCE REQUEST PAGE ---
export function ResourceRequestPage() {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Community Resource Board
          </h2>
          <p className="mt-1 text-slate-500">
            View and fulfill urgent needs from affected areas.
          </p>
        </div>
        <button className="mt-4 sm:mt-0 w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
          <PlusCircle className="h-5 w-5 mr-2" />
          Request Supplies
        </button>
      </div>

      <div className="space-y-4">
        {resourceRequestsData.map((req, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between ${
              req.urgent
                ? "bg-amber-100 border-l-4 border-amber-500"
                : "bg-slate-50 border-l-4 border-slate-300"
            }`}
          >
            <div className="flex items-start">
              <Box
                className={`h-8 w-8 mr-4 mt-1 flex-shrink-0 ${
                  req.urgent ? "text-amber-600" : "text-slate-500"
                }`}
              />
              <div>
                <p className="font-bold text-slate-800">{req.item}</p>
                <p className="text-sm text-slate-600">
                  {req.quantity} needed in{" "}
                  <span className="font-medium">{req.location}</span>
                </p>
              </div>
            </div>
            <button className="mt-3 sm:mt-0 w-full sm:w-auto bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Fulfill
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
