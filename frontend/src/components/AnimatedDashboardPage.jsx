import { ShieldAlert } from "lucide-react";
import { CommunityNeeds } from "./CommunityNeeds";

export function AnimatedDashboardPage({ navigate }) {
  return (
    <>
      <style>{`
                #helicopter-group { animation: hover 3s ease-in-out infinite; }
                /* Removed #main-rotor animation from CSS, it's now handled by SVG <animate> tags for better control */
                #tail-rotor { animation: spin 0.1s linear infinite; transform-origin: center; transform-box: fill-box; }
                #rescue-hoist { animation: hoist 12s ease-in-out infinite; }
                .wave { animation: wave-flow 10s linear infinite; }
                .wave.back { animation-duration: 15s; animation-direction: reverse; opacity: 0.7; }
                .rain-drop { animation: rain-fall 1s linear infinite; }

                @keyframes hover { 
                    0%, 100% { transform: translate(0, 0) rotate(0); } 
                    50% { transform: translate(5px, -5px) rotate(1deg); } 
                }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes hoist { 
                    0%, 100% { transform: translateY(0); } 
                    50% { transform: translateY(40px); } 
                }
                @keyframes wave-flow {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100px); }
                }
                @keyframes rain-fall {
                    from { transform: translateY(-20px); opacity: 1; }
                    to { transform: translateY(200px); opacity: 0; }
                }
            `}</style>
      <div className="space-y-6">
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-800 p-4 rounded-r-lg shadow-md flex items-start">
          <ShieldAlert className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold">LATEST ALERT: High Surf Warning</h3>
            <p className="text-sm">
              Dangerous swimming conditions expected for the next 48 hours along
              the coast. Please avoid all beaches.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold">
              Kerala State Disaster Response
            </h2>
            <p className="mt-2 text-slate-300">
              Coordination Hub for Emergency Services. All systems operational.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-red-500/80 p-4 rounded-lg">
                <p className="font-bold text-2xl">High</p>
                <p className="text-sm opacity-90">Current Alert Level</p>
              </div>
              <div className="bg-green-500/80 p-4 rounded-lg">
                <p className="font-bold text-2xl">Active</p>
                <p className="text-sm opacity-90">Rescue Operations</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-900 relative">
            {/* --- FINAL RESCUE ANIMATION --- */}
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <defs>
                <linearGradient
                  id="stormy-sky"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#1e293b" }} />
                  <stop offset="100%" style={{ stopColor: "#334155" }} />
                </linearGradient>
                <pattern
                  id="wave-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 10 C 25 0, 50 20, 75 10 S 100 0, 100 10"
                    stroke="#94a3b8"
                    fill="none"
                  />
                </pattern>
              </defs>

              {/* Background */}
              <rect width="400" height="200" fill="url(#stormy-sky)" />

              {/* Rain */}
              <g>
                {[...Array(30)].map((_, i) => (
                  <line
                    key={i}
                    className="rain-drop"
                    x1={Math.random() * 400}
                    y1="0"
                    x2={Math.random() * 400}
                    y2="200"
                    stroke="rgba(148, 163, 184, 0.5)"
                    strokeWidth="1"
                    style={{ animationDelay: `${Math.random()}s` }}
                  />
                ))}
              </g>

              {/* Helicopter + Rescue */}
              <g id="helicopter-group" transform="translate(120,30)">
                {/* Hoist */}
                {/* Rescue Hoist */}
                <g id="rescue-hoist">
                  {/* Rope - attaches from bottom skid */}
                  <line
                    x1="65"
                    y1="45"
                    x2="65"
                    y2="95"
                    stroke="#f1f5f9"
                    strokeWidth="1.5"
                  />

                  {/* Person */}
                  <g transform="translate(55,95)">
                    {/* Head */}
                    <circle cx="10" cy="-6" r="4" fill="#f1f5f9" />
                    {/* Body */}
                    <rect
                      x="5"
                      y="-2"
                      width="10"
                      height="12"
                      fill="#f87171"
                      rx="2"
                    />
                    {/* Arms */}
                    <line
                      x1="5"
                      y1="2"
                      x2="0"
                      y2="8"
                      stroke="#fca5a5"
                      strokeWidth="2"
                    />
                    <line
                      x1="15"
                      y1="2"
                      x2="20"
                      y2="8"
                      stroke="#fca5a5"
                      strokeWidth="2"
                    />
                    {/* Legs */}
                    <line
                      x1="8"
                      y1="10"
                      x2="4"
                      y2="18"
                      stroke="#fca5a5"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="10"
                      x2="16"
                      y2="18"
                      stroke="#fca5a5"
                      strokeWidth="2"
                    />

                    {/* Animation: up/down + swing */}
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="55,95; 55,75; 55,95"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-5;5;-5"
                      dur="3s"
                      additive="sum"
                      repeatCount="indefinite"
                    />
                  </g>
                </g>

                {/* Helicopter Body */}
                <path
                  d="M 10 30 C 0 30, 0 20, 10 20 L 70 20 C 100 20, 115 25, 100 45 L 20 45 Z"
                  fill="#94a3b8"
                />
                <path d="M100 45 L 140 47 L 145 42 L 105 42 Z" fill="#64748b" />
                <rect
                  x="30"
                  y="22"
                  width="30"
                  height="12"
                  fill="#1e293b"
                  rx="3"
                />
                <path d="M0 30 H 15 V 35 H 0 Z" fill="#64748b" />
                <path d="M15 35 H 85 V 40 H 15 Z" fill="#64748b" />

                {/* Tail Rotor */}
                <g id="tail-rotor" transform="translate(142,44.5)">
                  <rect x="-5" y="-0.5" width="10" height="1" fill="#e2e8f0" />
                  <rect x="-0.5" y="-5" width="1" height="10" fill="#e2e8f0" />
                </g>

                {/* Main Rotor */}
                <g transform="translate(60,20)">
                  <rect
                    x="-70"
                    y="-1"
                    width="140"
                    height="2"
                    fill="#e2e8f0"
                    opacity="0.8"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0;360"
                      dur="0.3s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              </g>

              {/* Waves */}
              <rect
                className="wave back"
                width="500"
                height="50"
                y="150"
                fill="url(#wave-pattern)"
              />
              <rect
                className="wave"
                width="500"
                height="50"
                y="155"
                fill="url(#wave-pattern)"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white text-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-md">
              <div>
                <h3 className="text-3xl font-bold text-red-600">
                  Emergency SOS
                </h3>
                <p className="mt-2 text-slate-600 max-w-md">
                  Press only in a life-threatening situation to alert
                  authorities.
                </p>
              </div>
              <button
                onClick={() => navigate("sos")}
                className="sos-button mt-6 md:mt-0 flex-shrink-0 w-28 h-28 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-red-200"
              >
                SOS
              </button>
            </div>
            <div className="bg-emerald-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-md">
              <div>
                <h3 className="text-3xl font-bold">Support the Response</h3>
                <p className="mt-2 text-emerald-100 max-w-md">
                  Your contribution helps provide critical supplies and support
                  to those affected.
                </p>
              </div>
              <button
                onClick={() => navigate("donate")}
                className="mt-6 md:mt-0 flex-shrink-0 bg-white text-emerald-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-emerald-50 transition-transform transform hover:scale-105"
              >
                Donate Now
              </button>
            </div>
          </div>
          <CommunityNeeds navigate={navigate} />
        </div>
      </div>
    </>
  );
}
