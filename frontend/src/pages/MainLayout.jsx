// MainLayout.jsx
import { Link, Outlet } from "react-router-dom";
import {
  ShieldAlert,
  Home,
  Users,
  Settings,
  CloudSun,
  Bell,
  Phone,
  Radio,
  BookOpen,
  Siren,
  MapPin,
  Heart,
  Box,
} from "lucide-react";

export function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white h-full">
        <div className="p-5 border-b border-slate-700 flex items-center text-xl font-bold">
          <ShieldAlert className="mr-2 text-emerald-400" />
          SafeZone
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="/"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Home className="mr-3 h-5 w-5" /> Dashboard
          </Link>
          <Link
            to="/weather"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <CloudSun className="mr-3 h-5 w-5" /> Weather
          </Link>
          <Link
            to="/alerts"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Bell className="mr-3 h-5 w-5" /> Alert Notifications
          </Link>
          <Link
            to="/contacts"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Phone className="mr-3 h-5 w-5" /> Emergency Contacts
          </Link>
          <Link
            to="/channels"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Radio className="mr-3 h-5 w-5" /> Rescue Channels
          </Link>
          <Link
            to="/info"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <BookOpen className="mr-3 h-5 w-5" /> Safety Information
          </Link>
          <Link
            to="/sos"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Siren className="mr-3 h-5 w-5" /> Emergency SOS
          </Link>
          <Link
            to="/map"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <MapPin className="mr-3 h-5 w-5" /> Map Navigation
          </Link>
          <Link
            to="/donate"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Heart className="mr-3 h-5 w-5" /> Donate
          </Link>
          <Link
            to="/resources"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Box className="mr-3 h-5 w-5" /> Resource Requests
          </Link>

          <Link
            to="/settings"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-700"
          >
            <Settings className="mr-3 h-5 w-5" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Admin Panel</h2>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* renders nested routes */}
        </div>
      </main>
    </div>
  );
}
