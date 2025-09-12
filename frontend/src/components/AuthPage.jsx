import { ShieldAlert } from "lucide-react";

export function AuthPage({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold flex items-center justify-center text-slate-800">
            <ShieldAlert className="mr-2 text-emerald-500 h-8 w-8" />
            <span>SafeZone</span>
          </h1>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">{children}</div>
      </div>
    </div>
  );
}
