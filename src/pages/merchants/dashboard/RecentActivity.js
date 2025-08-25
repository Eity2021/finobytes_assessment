import { Users, Plus } from "lucide-react";

export default function RecentActivity() {
  const recentUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      points: 2450,
      status: "Gold",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Mike Chen",
      email: "mike@example.com",
      points: 1890,
      status: "Silver",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Emma Davis",
      email: "emma@example.com",
      points: 3200,
      status: "Platinum",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Alex Rodriguez",
      email: "alex@example.com",
      points: 1250,
      status: "Bronze",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lisa Wang",
      email: "lisa@example.com",
      points: 2800,
      status: "Gold",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (

      <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-xl">
        {/* Card Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Users className="w-5 h-5 text-primary" />
              Recent Users
            </span>
            <button className="flex items-center px-3 py-1.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#3b680c] to-[#b5bd20] hover:from-[#b5bd20] hover:to-[#3b680c] transition">
              <Plus className="w-4 h-4 mr-1" />
              Add User
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Latest user registrations and activity
          </p>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-4">
          {recentUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 ring-2 ring-blue-200 text-gray-800 font-semibold">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>

              {/* Status + Points */}
              <div className="text-right">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    user.status === "Platinum"
                      ? "bg-gradient-to-r from-[#70751c] to-[#bbc13e] text-white"
                      : "bg-gradient-to-r from-[#487D0E] to-[#A8AF29] text-white"
                  }`}
                >
                  {user.status}
                </span>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  {user.points.toLocaleString()} pts
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
}
