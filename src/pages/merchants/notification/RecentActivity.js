import { Bell, Check, X, Eye, Clock, AlertCircle, CheckCircle, XCircle } from "lucide-react"

export default function RecentActivity({ recentActivity, getStatusIcon }) {
    return (
        <div>            <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Recent Activity
            </h2>
            {recentActivity.map((activity) => (
                <div
                    key={activity.id}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                >
                    {getStatusIcon(activity.status)}
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{activity.type}</h4>
                            <span className="px-2 py-0.5 text-xs border rounded-full text-gray-600">
                                {activity.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <div className="flex gap-4 text-xs text-gray-400 mt-1">
                            <span>{activity.user}</span>
                            <span>{activity.timestamp}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div></div>
    )
}
