import { DollarSign } from "lucide-react";

export default function Limits({
  setMinimumPurchase,
  minimumPurchase,
  maximumPoints,
  setMaximumPoints,
}) {
  return (
    <div>
      {/* Purchase Limits */}
      <div className="bg-white rounded-xl shadow p-6 h-full">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <DollarSign className="w-5 h-5 text-green-500" />
          Purchase Limits
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Set minimum and maximum thresholds for earning points
        </p>

        <div className="mb-6 space-y-2">
          <label className="text-base font-medium">
            Minimum Purchase Amount
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="number"
              value={minimumPurchase}
              onChange={(e) => setMinimumPurchase(e.target.value)}
              className="w-full border rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <p className="text-sm text-gray-500">
            Customers must spend at least ${minimumPurchase} to earn points
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-base font-medium">
            Maximum Points Per Transaction
          </label>
          <input
            type="number"
            value={maximumPoints}
            onChange={(e) => setMaximumPoints(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <p className="text-sm text-gray-500">
            Cap points earned at {maximumPoints} per single transaction
          </p>
        </div>
      </div>
    </div>
  );
}
