import { ArrowLeft } from "lucide-react";
import PointsByCategory from "./PointsByCategory";
import PointsExpiring from "./PointsExpiring";
import MonthlyPoints from "./MonthlyPoints";
import PointsSummery from "./PointsSummery";

export default function SummeryPoints() {
  const pointsData = {
    totalPoints: 2847,
    availablePoints: 2847,
    redeemedPoints: 1250,
    expiredPoints: 125,
    pointsThisMonth: 350,
    pointsLastMonth: 280,
    monthlyData: [
      { month: "Jan", points: 420 },
      { month: "Feb", points: 380 },
      { month: "Mar", points: 290 },
      { month: "Apr", points: 350 },
      { month: "May", points: 280 },
      { month: "Jun", points: 350 },
    ],
    categoryBreakdown: [
      { category: "Purchases", points: 1800, color: "#8b5cf6" },
      { category: "Referrals", points: 750, color: "#06b6d4" },
      { category: "Reviews", points: 200, color: "#10b981" },
      { category: "Bonuses", points: 97, color: "#f59e0b" },
    ],
    upcomingExpiry: [
      { points: 150, expiryDate: "March 15, 2024" },
      { points: 75, expiryDate: "April 2, 2024" },
      { points: 200, expiryDate: "April 20, 2024" },
    ],
  };

  const totalEarned =
    pointsData.totalPoints +
    pointsData.redeemedPoints +
    pointsData.expiredPoints;
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Points Summary
              </h1>
              <p className="text-gray-500">
                Detailed overview of your rewards points
              </p>
            </div>
          </div>

          {/* Points Overview Cards */}
          <PointsSummery pointsData={pointsData} totalEarned={totalEarned} />
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Points Chart */}

            <MonthlyPoints pointsData={pointsData}></MonthlyPoints>
            {/* Points by Category */}
            <PointsByCategory
              pointsData={pointsData}
              totalEarned={totalEarned}
            ></PointsByCategory>
          </div>
          <PointsExpiring pointsData={pointsData} />
          {/* Upcoming Expiry */}
        </div>
      </div>
    </div>
  );
}
