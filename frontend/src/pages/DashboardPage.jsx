import { CloudSun, Phone, BookOpen, MapPin, ShieldAlert } from "lucide-react";

export function DashboardPage({ navigate }) {
  return (
    <div className="space-y-6">
      {/* Latest Alert Section */}
      <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-800 p-4 rounded-r-lg shadow-md flex items-start">
        <ShieldAlert className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-bold">LATEST ALERT: High Wind Advisory</h3>
          <p className="text-sm">
            Strong winds expected across coastal areas from 4:00 PM onwards.
            Secure loose objects and avoid coastal travel. Updated: 5 mins ago.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* SOS Card */}
          <div className="bg-red-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg shadow-red-200">
            <div>
              <h3 className="text-3xl font-bold">Emergency SOS</h3>
              <p className="mt-2 text-red-100 max-w-md">
                If you are in immediate danger, press the SOS button to alert
                authorities with your location.
              </p>
            </div>
            <button
              onClick={() => navigate("sos")}
              className="sos-button mt-6 md:mt-0 flex-shrink-0 w-28 h-28 bg-white rounded-full flex items-center justify-center text-red-600 font-bold text-3xl shadow-2xl"
            >
              SOS
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-slate-800 text-lg">
                Current Weather
              </h4>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <CloudSun className="w-12 h-12 text-sky-500" />
                  <span className="text-4xl font-bold ml-4 text-slate-900">
                    29°C
                  </span>
                </div>
                <div className="text-right text-slate-500">
                  <p>Scattered Clouds</p>
                  <p>Feels like 32°C</p>
                </div>
              </div>
              <button
                onClick={() => navigate("weather")}
                className="mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                View Full Forecast &rarr;
              </button>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-bold text-slate-800 text-lg">
                Active Alerts Summary
              </h4>
              <div className="mt-4 space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
                  <p className="ml-3 text-sm text-slate-600">
                    <strong>High Surf Warning</strong>
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                  <p className="ml-3 text-sm text-slate-600">
                    <strong>Severe Thunderstorm Watch</strong>
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("alerts")}
                className="mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                View All Alerts &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h4 className="font-bold text-slate-800 text-lg mb-4">
            Quick Actions
          </h4>
          <div className="space-y-3">
            <button
              onClick={() => navigate("contacts")}
              className="w-full text-left flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="h-6 w-6 text-blue-500 mr-4" />
              <div>
                <p className="font-semibold text-slate-800">Helplines</p>
                <p className="text-sm text-slate-500">
                  Find emergency numbers.
                </p>
              </div>
            </button>
            <button
              onClick={() => navigate("map")}
              className="w-full text-left flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <MapPin className="h-6 w-6 text-green-500 mr-4" />
              <div>
                <p className="font-semibold text-slate-800">Nearby Shelters</p>
                <p className="text-sm text-slate-500">
                  View safe locations on map.
                </p>
              </div>
            </button>
            <button
              onClick={() => navigate("info")}
              className="w-full text-left flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <BookOpen className="h-6 w-6 text-indigo-500 mr-4" />
              <div>
                <p className="font-semibold text-slate-800">Safety Guides</p>
                <p className="text-sm text-slate-500">
                  Read preparedness checklists.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
