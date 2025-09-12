import { Video } from "lucide-react";
import { rescueChannelsData } from "../assets/data";

export function ChannelsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        District Rescue Channels
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rescueChannelsData.map((channel) => (
          <div
            key={channel.district}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {channel.district} District Team
              </h3>
              <div className="flex items-center mt-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full mr-2 ${
                    channel.status === "Active"
                      ? "bg-green-500"
                      : "bg-slate-400"
                  }`}
                ></span>
                <span
                  className={`text-sm font-medium ${
                    channel.status === "Active"
                      ? "text-green-600"
                      : "text-slate-500"
                  }`}
                >
                  {channel.status}
                </span>
              </div>
            </div>
            <button
              className="mt-4 w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center disabled:bg-slate-300"
              disabled={channel.status !== "Active"}
            >
              <Video className="h-5 w-5 mr-2" />
              Join Conference
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
