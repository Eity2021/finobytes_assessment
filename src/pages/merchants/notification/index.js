import { useState } from "react";
import { Bell, Clock, CheckCircle, XCircle } from "lucide-react";
import Pending from "./Pending";
import RecentActivity from "./RecentActivity";
import AllNotification from "./AllNotifications";

const approvalRequests = [
  {
    id: "REQ-001",
    type: "Purchase Approval",
    user: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80g",
    },
    description: "Premium Subscription purchase for $29.99",
    amount: "$29.99",
    points: 2999,
    timestamp: "2 minutes ago",
    priority: "high",
    status: "pending",
  },
  {
    id: "REQ-002",
    type: "Refund Request",
    user: {
      name: "Mike Chen",
      email: "mike@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    description: "Requesting refund for Gift Card $50",
    amount: "$50.00",
    points: 5000,
    timestamp: "15 minutes ago",
    priority: "medium",
    status: "pending",
  },
  {
    id: "REQ-003",
    type: "Points Adjustment",
    user: {
      name: "Emma Davis",
      email: "emma@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    description: "Request to add bonus points for referral",
    amount: "N/A",
    points: 1000,
    timestamp: "1 hour ago",
    priority: "low",
    status: "pending",
  },
  {
    id: "REQ-004",
    type: "Account Verification",
    user: {
      name: "Alex Rodriguez",
      email: "alex@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    description: "Identity verification for premium features",
    amount: "N/A",
    points: 0,
    timestamp: "2 hours ago",
    priority: "high",
    status: "pending",
  },
];

const recentActivity = [
  {
    id: "ACT-001",
    type: "Purchase Approved",
    user: "Lisa Wang",
    description: "Monthly Bundle purchase approved",
    timestamp: "5 minutes ago",
    status: "approved",
  },
  {
    id: "ACT-002",
    type: "Refund Processed",
    user: "John Smith",
    description: "Gift card refund processed successfully",
    timestamp: "30 minutes ago",
    status: "completed",
  },
  {
    id: "ACT-003",
    type: "Points Added",
    user: "Maria Garcia",
    description: "Bonus points added for birthday",
    timestamp: "1 hour ago",
    status: "completed",
  },
];
export default function Notification() {
  const [requests, setRequests] = useState(approvalRequests);
  const [activeTab, setActiveTab] = useState("pending");

  const handleApprove = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const handleReject = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-600" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Notifications
              </h1>
              <p className="text-gray-500 mt-1">
                Manage approval requests and system notifications
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold">
                {requests.length} Pending
              </span>
              <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <Bell className="w-4 h-4" /> Mark All Read
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div>
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1 max-w-md">
              <button
                onClick={() => setActiveTab("pending")}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "pending"
                    ? "bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white"
                    : "text-gray-600"
                }`}
              >
                Pending ({requests.length})
              </button>
              <button
                onClick={() => setActiveTab("recent")}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "recent"
                    ? "bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white"
                    : "text-gray-600"
                }`}
              >
                Recent Activity
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white"
                    : "text-gray-600"
                }`}
              >
                All Notifications
              </button>
            </div>
          </div>
          {activeTab === "pending" && (
            <Pending
              requests={requests}
              getPriorityColor={getPriorityColor}
              handleReject={handleReject}
              handleApprove={handleApprove}
            />
          )}

          {/* Recent Activity */}
          {activeTab === "recent" && (
            <RecentActivity
              recentActivity={recentActivity}
              getStatusIcon={getStatusIcon}
            ></RecentActivity>
          )}

          {/* All Notifications */}
          {activeTab === "all" && <AllNotification />}
        </div>
      </div>
    </div>
  );
}
