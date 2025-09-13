import { resourceRequestsData } from "../assets/data";
import { Box } from "lucide-react";
export function CommunityNeeds({ navigate }) {
  // A small component for the dashboard
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h4 className="font-bold text-slate-800 text-lg mb-4">Community Needs</h4>
      <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
        {resourceRequestsData.slice(0, 3).map((req, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg flex items-start ${
              req.urgent ? "bg-amber-50" : "bg-slate-50"
            }`}
          >
            <Box
              className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                req.urgent ? "text-amber-600" : "text-slate-500"
              }`}
            />
            <div>
              <p className="font-semibold text-sm text-slate-800">{req.item}</p>
              <p className="text-xs text-slate-500">
                {req.quantity} needed in {req.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("resources")}
        className="mt-4 w-full text-center text-sm font-medium text-blue-600 hover:underline"
      >
        View & Fulfill All Requests &rarr;
      </button>
    </div>
  );
}
