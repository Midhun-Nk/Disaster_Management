import React, { useState, useEffect } from "react";

export function SosPage() {
  /* ... No changes ... */
  const [sosState, setSosState] = useState("idle"); // idle, sending, sent
  const [feedback, setFeedback] = useState("");

  const handleActivateSOS = () => {
    if (sosState !== "idle") return;
    setSosState("sending");
    setFeedback("Acquiring your location...");
    setTimeout(() => {
      const latitude = (11.2588 + (Math.random() - 0.5) * 0.1).toFixed(6);
      const longitude = (75.7804 + (Math.random() - 0.5) * 0.1).toFixed(6);
      setFeedback(
        `Location acquired: ${latitude}, ${longitude}. Sending alert...`
      );
      setTimeout(() => {
        setSosState("sent");
        setFeedback("SUCCESS: Distress signal sent. Help is on the way.");
      }, 2000);
    }, 1500);
  };

  const getButtonClass = () =>
    sosState === "sending"
      ? "bg-amber-500 cursor-not-allowed"
      : sosState === "sent"
      ? "bg-green-600 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700 transform hover:scale-105";
  const getButtonText = () =>
    sosState === "sending"
      ? "SENDING"
      : sosState === "sent"
      ? "SENT"
      : "ACTIVATE";

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-2xl mx-auto">
      <h3 className="text-3xl font-extrabold text-red-600">Activate SOS</h3>
      <p className="text-slate-600 my-4">
        This will send your precise location and a distress signal to emergency
        services. Only use this in a life-threatening situation.
      </p>
      {feedback && (
        <div
          className={`my-4 text-lg font-medium ${
            sosState === "sent" ? "text-green-600" : "text-slate-600"
          }`}
        >
          {feedback}
        </div>
      )}
      <button
        onClick={handleActivateSOS}
        disabled={sosState !== "idle"}
        className={`w-48 h-48 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto my-6 shadow-lg transition-all duration-300 ${getButtonClass()}`}
      >
        {getButtonText()}
      </button>
    </div>
  );
}
