import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Menu,
  Settings,
  LogOut,
  CircleUserRound,
} from "lucide-react";
import { pageConfig } from "../assets/data";

export function MainLayout({ onLogout }) {
  const [activePage, setActivePage] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const navigate = (page) => {
    setActivePage(page);
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const ActivePageComponent = pageConfig[activePage].component;
  const navItems = Object.keys(pageConfig);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const profileButton = document.getElementById("profile-menu-button");
      if (
        isProfileMenuOpen &&
        profileButton &&
        !profileButton.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileMenuOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-slate-800 text-white flex-shrink-0 fixed md:relative h-full z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-5 border-b border-slate-700 flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <ShieldAlert className="mr-2 text-emerald-400" />
            <span>SafeZone</span>
          </h1>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((key) => (
            <a
              key={key}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(key);
              }}
              className={`nav-link flex items-center px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors ${
                activePage === key ? "active" : ""
              }`}
            >
              {React.createElement(pageConfig[key].icon, {
                className: "mr-3 h-5 w-5",
              })}{" "}
              {pageConfig[key].title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen">
        <header className="sticky top-0 glass-header flex items-center justify-between p-4 z-20">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-slate-800"
          >
            <Menu />
          </button>
          <h2 className="text-xl font-bold text-slate-800">
            {pageConfig[activePage].title}
          </h2>
          <div className="flex items-center space-x-4 relative">
            <span className="text-sm font-medium text-slate-600 hidden sm:block">
              Kozhikode, Kerala
            </span>
            <div id="profile-menu-button">
              <button
                onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center"
              >
                <CircleUserRound className="h-6 w-6 text-slate-600" />
              </button>
            </div>
            {isProfileMenuOpen && (
              <div className="absolute top-12 right-0 bg-white rounded-lg shadow-xl w-48 py-2 z-50">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("settings");
                    setProfileMenuOpen(false);
                  }}
                  className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </a>
                <a
                  href="#"
                  onClick={onLogout}
                  className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="page">
            <ActivePageComponent navigate={navigate} />
          </div>
        </div>
      </main>
    </div>
  );
}
