import { Wind, Droplets, Gauge, Eye } from "lucide-react";
import { forecast } from "../assets/data";

function WeatherPage() {
  /* ... No changes ... */

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Current Conditions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-500 flex items-center justify-center">
              <Droplets className="mr-2 h-4 w-4" />
              Humidity
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-1">85%</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-500 flex items-center justify-center">
              <Wind className="mr-2 h-4 w-4" />
              Wind Speed
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-1">12 km/h</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-500 flex items-center justify-center">
              <Gauge className="mr-2 h-4 w-4" />
              Pressure
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-1">1012 hPa</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-500 flex items-center justify-center">
              <Eye className="mr-2 h-4 w-4" />
              Visibility
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-1">8 km</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          5-Day Forecast
        </h3>
        <div className="divide-y divide-slate-200">
          {forecast.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between py-4"
            >
              <p className="font-medium text-slate-700 w-1/4">{item.day}</p>
              <div className="w-1/4 flex justify-center">
                <item.icon className="w-8 h-8 text-amber-500" />
              </div>

              <p className="text-sm text-slate-500 w-1/4 text-center">
                {item.condition}
              </p>
              <p className="font-medium text-slate-800 w-1/4 text-right">
                {item.temps}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
