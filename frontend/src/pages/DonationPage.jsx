// --- NEW DONATION PAGE ---
import { useState } from "react";
import { Heart } from "lucide-react";
export function DonationPage() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    if (value !== "") {
      setAmount(parseInt(value, 10));
    } else {
      setAmount(0);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
      <div className="text-center">
        <Heart className="mx-auto h-12 w-12 text-red-500" />
        <h2 className="text-3xl font-bold text-slate-800 mt-4">
          Make a Donation
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Your generosity provides life-saving relief, including shelter, food,
          and medical care to families in need. Thank you for your support.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-slate-700 mb-4 text-center">
          Select an Amount (INR)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[500, 1000, 2500, 5000].map((val) => (
            <button
              key={val}
              onClick={() => handleAmountClick(val)}
              className={`p-4 rounded-lg text-xl font-bold border-2 transition-colors ${
                amount === val && customAmount === ""
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-slate-50 border-slate-200 hover:border-blue-500"
              }`}
            >
              ₹{val}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-700 mb-1 text-center">
            Or enter a custom amount
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              ₹
            </span>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount"
              className="w-full text-center text-xl font-bold rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 pl-8"
            />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <button className="w-full bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-emerald-700 transition-colors text-xl flex items-center justify-center">
            <Heart className="h-6 w-6 mr-3" />
            Donate ₹{amount || 0}
          </button>
          <p className="text-xs text-center text-slate-500 mt-2">
            Secure payment processing.
          </p>
        </div>
      </div>
    </div>
  );
}
