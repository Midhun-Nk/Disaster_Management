// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainLayout } from "./pages/MainLayout";
import Dashboard from "./pages/DashboardPage";
import Settings from "./pages/SettingsPage";
import WeatherPage from "./pages/WeatherPage";
import { AlertsPage } from "./pages/AlertsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { ChannelsPage } from "./pages/ChannelsPage";
import { InfoPage } from "./pages/InfoPage";
import { SosPage } from "./pages/SosPage";
import { MapPage } from "./pages/MapPage";
import { DonationPage } from "./pages/DonationPage";
import { ResourceRequestPage } from "./pages/ResourceRequestPage";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected layout routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/channels" element={<ChannelsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/sos" element={<SosPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/resources" element={<ResourceRequestPage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
