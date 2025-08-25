import { Bell } from "lucide-react";

export default function AllNotification() {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bell className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Notification History</h3>
        <p className="text-gray-500">
          View all past notifications and system alerts here.
        </p>
      </div>
    </div>
  );
}
