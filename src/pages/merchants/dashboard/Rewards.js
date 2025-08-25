import { Gift, Plus } from "lucide-react";

export default function Rewards() {
    const recentRewards = [
  { name: "50% Off Premium", type: "Discount", cost: 500, claimed: 234, total: 500 },
  { name: "Free Shipping", type: "Benefit", cost: 200, claimed: 456, total: 1000 },
  { name: "$10 Gift Card", type: "Voucher", cost: 1000, claimed: 89, total: 200 },
  { name: "VIP Access", type: "Experience", cost: 2000, claimed: 12, total: 50 },
]
  return (
    <div>
         <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-xl h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            <Gift className="w-5 h-5 text-indigo-500" />
            Popular Rewards
          </span>
          <button className="flex items-center px-3 py-1.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#3b680c] to-[#b5bd20] hover:from-[#b5bd20] hover:to-[#3b680c] transition">
            <Plus className="w-4 h-4 mr-1" />
            Create Reward
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">Most claimed rewards this month</p>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {recentRewards.map((reward, index) => {
          const percentage = (reward.claimed / reward.total) * 100;

          return (
            <div
              key={index}
              className="space-y-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">{reward.name}</p>
                  <p className="text-xs text-gray-500">
                    {reward.type} •{" "}
                    <span className="font-medium text-[#3b680c]">{reward.cost} points</span>
                  </p>
                </div>
                <span className="px-2 py-0.5 text-xs font-medium border border-[#3b680c] text-[#3b680c] rounded-full">
                  {reward.claimed}/{reward.total}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#43681c] to-[#60ac0f] h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}
