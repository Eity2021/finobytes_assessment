import { Users } from "lucide-react";
export default function Benefits() {
  return (
    <div>
      <div className="bg-white rounded-xl shadow p-6 h-full">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <Users className="w-5 h-5 text-primary" />
          Tier Benefits
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Configure benefits for different customer tiers
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
            <div>
              <span className="font-medium">Bronze Tier</span>
              <p className="text-sm text-gray-500">0 - 999 points</p>
            </div>
            <span className="text-sm font-bold">1x points</span>
          </div>

          <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
            <div>
              <span className="font-medium">Silver Tier</span>
              <p className="text-sm text-gray-500">1,000 - 2,499 points</p>
            </div>
            <span className="text-sm font-bold text-primary">1.2x points</span>
          </div>

          <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
            <div>
              <span className="font-medium">Gold Tier</span>
              <p className="text-sm text-gray-500">2,500 - 4,999 points</p>
            </div>
            <span className="text-sm font-bold text-yellow-600">
              1.5x points
            </span>
          </div>

          <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-200">
            <div>
              <span className="font-medium">Platinum Tier</span>
              <p className="text-sm text-gray-500">5,000+ points</p>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-[#3b680c] to-[#b5bd20] bg-clip-text text-transparent">
              2x points
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
