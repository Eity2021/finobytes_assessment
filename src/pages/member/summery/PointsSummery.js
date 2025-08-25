import {
  ArrowLeft,
  TrendingUp,
  Award,
  Calendar,
  Target,
  Coins,
} from "lucide-react";
export default function PointsSummery({ pointsData, totalEarned }) {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Available Points */}
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">Available Points</p>
          <div className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold text-primary">
              {pointsData.availablePoints.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Total Earned */}
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">Total Earned</p>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-2xl font-bold">
              {totalEarned.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Redeemed */}
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">Redeemed</p>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold">
              {pointsData.redeemedPoints.toLocaleString()}
            </span>
          </div>
        </div>

        {/* This Month */}
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-sm text-gray-500 mb-1">This Month</p>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold">
              +{pointsData.pointsThisMonth}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {pointsData.pointsThisMonth > pointsData.pointsLastMonth ? "+" : ""}
            {(
              ((pointsData.pointsThisMonth - pointsData.pointsLastMonth) /
                pointsData.pointsLastMonth) *
              100
            ).toFixed(1)}
            % from last month
          </p>
        </div>
      </div>
    </div>
  );
}
