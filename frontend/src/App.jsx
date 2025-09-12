import React, { useState, useEffect } from "react";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainLayout } from "./pages/MainLayout";

export default function App() {
  const [authState, setAuthState] = useState("login"); // 'login', 'register', 'app'

  const handleLogin = () => setAuthState("app");
  const handleLogout = () => setAuthState("login");
  const navigateAuth = (page) => setAuthState(page);

  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                body { font-family: 'Inter', sans-serif; }
                .glass-header { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid rgba(203, 213, 225, 0.5); }
                .nav-link.active { background-color: #0f172a; color: white; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
                .page { animation: fadeIn 0.5s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .sos-button { animation: pulse 2s infinite; }
                @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(220, 38, 38, 0); } 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); } }
            `}</style>
      {authState === "app" ? (
        <MainLayout onLogout={handleLogout} />
      ) : authState === "login" ? (
        <LoginPage onLogin={handleLogin} onNavigate={navigateAuth} />
      ) : (
        <RegisterPage onLogin={handleLogin} onNavigate={navigateAuth} />
      )}
    </>
  );
}
