import {
  Trophy,
  Gift,
  Star,
  TrendingUp,
  Calendar,
  Target,
  Zap,
} from "lucide-react";
export default function Benefits({ memberData }) {
  return (
    <div>
      {" "}
      <div className="bg-white shadow rounded-xl p-6 h-full">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
          <Gift className="h-5 w-5 text-primary" />
          Member Benefits
        </h2>
        <p className="text-sm text-gray-500 mb-4">Your current perks</p>
        <div className="space-y-3">
          {memberData.benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{benefit.icon}</span>
                <span className="font-medium">{benefit.name}</span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  benefit.status === "active"
                    ? "bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {benefit.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
