import { Calendar, Coins } from "lucide-react";

export default function PointsByCategory({ pointsData, totalEarned }) {
  return (
    <div>
      <div className="bg-white shadow rounded-xl p-6 h-full">
        <h2 className="text-xl font-semibold mb-1">Points by Category</h2>
        <p className="text-sm text-gray-500 mb-4">
          Breakdown of how you earned your points
        </p>
        <div className="space-y-4">
          {pointsData.categoryBreakdown.map((category, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">{category.category}</span>
                <span className="font-bold">
                  {category.points.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(category.points / totalEarned) * 100}%`,
                    backgroundColor: category.color,
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">
                {((category.points / totalEarned) * 100).toFixed(1)}% of total
                earned
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
