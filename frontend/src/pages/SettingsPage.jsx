import React, { useState, useEffect } from "react";

function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">
        Settings
      </h2>

      {/* Profile Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-slate-700">
            Profile Information
          </h3>
          <p className="text-sm text-slate-500">
            Update your personal details.
          </p>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Demo User"
              className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="user@example.com"
              className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-slate-700">
            Notifications
          </h3>
          <p className="text-sm text-slate-500">
            Manage how you receive alerts.
          </p>
        </div>
        <div className="md:col-span-2 flex items-center">
          <div
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              notifications ? "bg-indigo-600" : "bg-slate-200"
            }`}
            onClick={() => setNotifications(!notifications)}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                notifications ? "translate-x-5" : "translate-x-0"
              }`}
            ></span>
          </div>
          <span className="ml-3 text-sm font-medium text-slate-700">
            {notifications
              ? "Push Notifications Enabled"
              : "Push Notifications Disabled"}
          </span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t flex justify-end">
        <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
