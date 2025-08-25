import {
  ArrowLeft,
  TrendingUp,
  Award,
  Calendar,
  Target,
  Coins,
} from "lucide-react";

export default function PointsExpiring({ pointsData }) {
  return (
    <div>
      {" "}
      <div className="bg-white shadow rounded-xl p-6 h-full">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
          <Calendar className="h-5 w-5 text-orange-500" />
          Points Expiring Soon
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Don&apos;t let these points go to waste!
        </p>
        <div className="space-y-3">
          {pointsData.upcomingExpiry.map((expiry, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Coins className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium">{expiry.points} points expiring</p>
                  <p className="text-sm text-gray-500">
                    Expires on {expiry.expiryDate}
                  </p>
                </div>
              </div>
              <span className="px-2 py-1 text-xs border border-orange-300 text-orange-600 rounded">
                Expiring Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
