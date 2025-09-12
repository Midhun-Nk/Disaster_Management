export function AlertsPage() {
  /* ... No changes ... */
  return (
    <div className="space-y-4">
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-lg"
        role="alert"
      >
        <p className="font-bold">FLOOD WARNING</p>
        <p>
          Issued: 1 hour ago. Rivers are expected to crest above flood stage.
          Evacuate low-lying areas immediately.
        </p>
      </div>
      <div
        className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 rounded-r-lg"
        role="alert"
      >
        <p className="font-bold">SEVERE THUNDERSTORM WATCH</p>
        <p>
          Issued: 3 hours ago. Conditions are favorable for the development of
          severe thunderstorms with high winds and hail. Monitor local news.
        </p>
      </div>
      <div
        className="bg-sky-100 border-l-4 border-sky-500 text-sky-700 p-4 rounded-r-lg"
        role="alert"
      >
        <p className="font-bold">HIGH SURF ADVISORY</p>
        <p>
          Issued: 1 day ago. Dangerous swimming and surfing conditions. Stay out
          of the water.
        </p>
      </div>
    </div>
  );
}
