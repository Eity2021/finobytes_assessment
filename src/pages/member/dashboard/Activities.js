import { Star, Calendar } from "lucide-react";
export default function Activities({ memberData }) {
  return (
    <div>
      {" "}
      <div className="bg-white shadow rounded-xl p-6 h-full">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
          <Calendar className="h-5 w-5 text-primary" />
          Recent Activity
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Your latest point activities
        </p>
        <div className="space-y-3">
          {memberData.recentActivity.map((a, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{a.action}</p>
                  <p className="text-sm text-gray-500">{a.date}</p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs border border-primary text-primary rounded">
                +{a.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
