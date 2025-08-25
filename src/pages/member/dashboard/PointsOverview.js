import { Trophy, TrendingUp, Target } from "lucide-react";

export default function PointsOverview({ progressPercentage, memberData }) {
  return (
    <div>
      {" "}
      <div className="bg-white shadow rounded-xl p-6 lg:col-span-2 h-full">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
          <Trophy className="h-5 w-5 text-primary" />
          Points Overview
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Track your rewards progress
        </p>

        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">
            {memberData.totalPoints.toLocaleString()}
          </div>
          <p className="text-gray-500">Total Points Earned</p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress to {memberData.nextRewardLevel}</span>
            <span>{memberData.pointsToNextReward} points to go</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-3 bg-primary rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6">
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="font-semibold">+350</div>
            <div className="text-sm text-gray-500">This Month</div>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <Target className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="font-semibold">Silver</div>
            <div className="text-sm text-gray-500">Current Tier</div>
          </div>
        </div>
      </div>
    </div>
  );
}
