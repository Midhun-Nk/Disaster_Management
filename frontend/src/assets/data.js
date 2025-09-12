// --- MOCK DATA ---
import {
  ShieldAlert,
  Menu,
  CloudSun,
  CloudLightning,
  CloudRain,
  MapPin,
  Siren,
  BookOpen,
  Radio,
  Phone,
  Bell,
  Home,
  Settings,
  // Settings,
  LogOut,
  CircleUserRound,
} from "lucide-react";

import { DashboardPage } from "../pages/DashboardPage";
import WeatherPage from "../pages/WeatherPage";
import { AlertsPage } from "../pages/AlertsPage";
import { ContactsPage } from "../pages/ContactsPage";
import { ChannelsPage } from "../pages/ChannelsPage";
import { InfoPage } from "../pages/InfoPage";
import { SosPage } from "../pages/SosPage";
import { MapPage } from "../pages/MapPage";
import { SettingsPage } from "../pages/SettingsPage";
export const safetyInfoData = [
  {
    title: "Earthquake Safety",
    content:
      "Drop, Cover, and Hold On. Stay indoors until the shaking stops. Stay away from windows. If outdoors, find a clear spot away from buildings, trees, and power lines.",
  },
  {
    title: "Flood Preparedness",
    content:
      "Have an emergency kit. Know your evacuation routes. Turn off utilities if instructed. Do not walk or drive through floodwaters.",
  },
  {
    title: "Cyclone/Hurricane Checklist",
    content:
      "Board up windows. Bring in outdoor furniture. Charge all devices and have backup power. Listen to authorities for evacuation orders.",
  },
  {
    title: "First Aid Basics",
    content:
      "Check the scene for safety. Call for help if needed. Care for the person. For bleeding, apply direct pressure. For burns, cool with water.",
  },
];

export const rescueChannelsData = [
  { district: "Kozhikode", status: "Active" },
  { district: "Malappuram", status: "Active" },
  { district: "Wayanad", status: "Standby" },
  { district: "Kannur", status: "Active" },
  { district: "Thrissur", status: "Standby" },
  { district: "Ernakulam", status: "Standby" },
];

// export const forecast = [
//   {
//     day: "Today",
//     condition: "Partly Sunny",
//     temps: "31° / 25°",
//     icon: <CloudSun className="w-8 h-8 text-amber-500" />,
//   },
//   {
//     day: "Saturday",
//     condition: "Thunderstorms",
//     temps: "28° / 24°",
//     icon: <CloudSun className="w-8 h-8 text-blue-500" />,
//   },
//   {
//     day: "Sunday",
//     condition: "Heavy Rain",
//     temps: "27° / 24°",
//     icon: <CloudSun className="w-8 h-8 text-slate-500" />,
//   },
// ];

export const forecast = [
  {
    day: "Today",
    condition: "Partly Sunny",
    temps: "31° / 25°",
    icon: CloudSun, // store component reference
  },
  {
    day: "Saturday",
    condition: "Thunderstorms",
    temps: "28° / 24°",
    icon: CloudLightning,
  },
  {
    day: "Sunday",
    condition: "Heavy Rain",
    temps: "27° / 24°",
    icon: CloudRain,
  },
];
export const pageConfig = {
  dashboard: { title: "Dashboard", icon: Home, component: DashboardPage },
  weather: { title: "Weather Details", icon: CloudSun, component: WeatherPage },
  alerts: { title: "Alert Notifications", icon: Bell, component: AlertsPage },
  contacts: {
    title: "Emergency Contacts",
    icon: Phone,
    component: ContactsPage,
  },
  channels: { title: "Rescue Channels", icon: Radio, component: ChannelsPage },
  info: { title: "Safety Information", icon: BookOpen, component: InfoPage },
  sos: { title: "Emergency SOS", icon: Siren, component: SosPage },
  map: { title: "Map Navigation", icon: MapPin, component: MapPage },
  settings: { title: "Settings", icon: Settings, component: SettingsPage },
};
//MapPin,Siren,BookOpen,Radio,Phone,Bell,CloudSun,Home,
export const contacts = [
  { name: "National Emergency", number: "112" },
  { name: "Police", number: "100" },
  { name: "Fire & Rescue", number: "101" },
  { name: "Ambulance", number: "102 / 108" },
  { name: "Disaster Management", number: "1077" },
  { name: "Women Helpline", number: "1091" },
];
