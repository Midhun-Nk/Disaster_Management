export function MapPage() {
  // NOTE: This component sets up the UI for a Leaflet map.
  // The actual map initialization script would go in a useEffect hook.
  return (
    <div className="bg-white rounded-2xl shadow-md p-2 h-full flex flex-col">
      <div className="flex-shrink-0 p-4">
        <h3 className="text-2xl font-bold text-slate-800">
          Area Map (OSM/Leaflet)
        </h3>
        <p className="text-slate-500">
          Showing shelters, hospitals, and hazard zones.
        </p>
      </div>
      <div className="flex-grow rounded-b-xl overflow-hidden relative">
        <div
          id="map-container"
          className="h-full w-full bg-slate-200 flex items-center justify-center"
        >
          <p className="text-slate-500 font-medium">
            Leaflet map would be initialized here.
          </p>
          {/* In a real app, a useEffect hook would run:
                       L.map('map-container').setView([11.25, 75.78], 13);
                       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                   */}
        </div>
        {/* Map UI Overlays */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
          <button className="bg-white w-8 h-8 flex items-center justify-center text-lg font-bold text-slate-700 rounded shadow-md border border-slate-300 hover:bg-slate-50">
            +
          </button>
          <button className="bg-white w-8 h-8 flex items-center justify-center text-lg font-bold text-slate-700 rounded shadow-md border border-slate-300 hover:bg-slate-50">
            -
          </button>
        </div>
        <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 p-3 rounded-lg shadow-md z-10">
          <h4 className="font-bold text-sm mb-2">Legend</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green-500 mr-2 border border-black/20"></span>{" "}
              Shelter
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-blue-500 mr-2 border border-black/20"></span>{" "}
              Hospital
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-red-500 mr-2 border border-black/20"></span>{" "}
              Hazard Zone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
