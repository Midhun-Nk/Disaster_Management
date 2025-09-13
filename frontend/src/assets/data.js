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
  Box,
  Heart,
} from "lucide-react";

import { AnimatedDashboardPage } from "../components/AnimatedDashboardPage";
import WeatherPage from "../pages/WeatherPage";
import { AlertsPage } from "../pages/AlertsPage";
import { ContactsPage } from "../pages/ContactsPage";
import { ChannelsPage } from "../pages/ChannelsPage";
import { InfoPage } from "../pages/InfoPage";
import { SosPage } from "../pages/SosPage";
import { MapPage } from "../pages/MapPage";

import { DonationPage } from "../pages/DonationPage";
import { ResourceRequestPage } from "../pages/ResourceRequestPage";

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
export const resourceRequestsData = [
  {
    item: "Bottled Water",
    quantity: "50 cases",
    location: "Mavoor",
    urgent: true,
  },
  {
    item: "First Aid Kits",
    quantity: "20 kits",
    location: "Feroke",
    urgent: true,
  },
  {
    item: "Blankets",
    quantity: "100 units",
    location: "Ramanattukara",
    urgent: false,
  },
  {
    item: "Baby Food",
    quantity: "30 units",
    location: "Medical College Area",
    urgent: true,
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

// export const pageConfig = [
//   {
//     path: "/",
//     title: "Dashboard",
//     icon: Home,
//     component: AnimatedDashboardPage,
//   },
//   {
//     path: "/weather",
//     title: "Weather Details",
//     icon: CloudSun,
//     component: WeatherPage,
//   },
//   {
//     path: "/alerts",
//     title: "Alert Notifications",
//     icon: Bell,
//     component: AlertsPage,
//   },
//   {
//     path: "/contacts",
//     title: "Emergency Contacts",
//     icon: Phone,
//     component: ContactsPage,
//   },
//   {
//     path: "/channels",
//     title: "Rescue Channels",
//     icon: Radio,
//     component: ChannelsPage,
//   },
//   {
//     path: "/info",
//     title: "Safety Information",
//     icon: BookOpen,
//     component: InfoPage,
//   },
//   { path: "/sos", title: "Emergency SOS", icon: Siren, component: SosPage },
//   { path: "/map", title: "Map Navigation", icon: MapPin, component: MapPage },
//   { path: "/donate", title: "Donate", icon: Heart, component: DonationPage },
//   {
//     path: "/resources",
//     title: "Resource Requests",
//     icon: Box,
//     component: ResourceRequestPage,
//   },
//   {
//     path: "/settings",
//     title: "Settings",
//     icon: Settings,
//     component: SettingsPage,
//   },
// ];
//MapPin,Siren,BookOpen,Radio,Phone,Bell,CloudSun,Home,
export const contacts = [
  { name: "National Emergency", number: "112" },
  { name: "Police", number: "100" },
  { name: "Fire & Rescue", number: "101" },
  { name: "Ambulance", number: "102 / 108" },
  { name: "Disaster Management", number: "1077" },
  { name: "Women Helpline", number: "1091" },
];
