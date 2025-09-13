import { useState } from "react";
import { AuthPage } from "../components/AuthPage";
import axios from "axios";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { data } = await axios.post(
      `${backendUrl}/api/user/register`,
      payload
    );
  };
  return (
    <AuthPage>
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
        Create Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Register
        </button>
      </form>
      <p className="text-center text-sm text-slate-500 mt-6">
        Already have an account?{" "}
        <button className="font-medium text-indigo-600 hover:underline">
          Sign In
        </button>
      </p>
    </AuthPage>
  );
}
