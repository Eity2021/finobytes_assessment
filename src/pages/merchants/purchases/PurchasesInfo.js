import { useState } from "react";
import { Check, X, Eye, Filter, Search } from "lucide-react";

const pendingPurchases = [
  {
    id: "PUR-001",
    user: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar:  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    item: "Premium Subscription",
    amount: "$29.99",
    points: 2999,
    date: "2024-01-15",
    status: "pending",
  },
  {
    id: "PUR-002",
    user: {
      name: "Mike Chen",
      email: "mike@example.com",
      avatar:  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    item: "Gift Card $50",
    amount: "$50.00",
    points: 5000,
    date: "2024-01-15",
    status: "pending",
  },
  {
    id: "PUR-003",
    user: {
      name: "Emma Davis",
      email: "emma@example.com",
      avatar:  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    item: "VIP Access Pass",
    amount: "$99.99",
    points: 9999,
    date: "2024-01-14",
    status: "pending",
  },
  {
    id: "PUR-004",
    user: {
      name: "Alex Rodriguez",
      email: "alex@example.com",
      avatar:  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    item: "Monthly Bundle",
    amount: "$19.99",
    points: 1999,
    date: "2024-01-14",
    status: "pending",
  },
];

export default function PurchasesInfo() {
  const [purchases, setPurchases] = useState(pendingPurchases);
  const [searchTerm, setSearchTerm] = useState("");

  const handleApprove = (id) => {
    setPurchases((prev) => prev.filter((p) => p.id !== id));
  };

  const handleReject = (id) => {
    setPurchases((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredPurchases = purchases.filter(
    (purchase) =>
      purchase.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return ( <div>
     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
              Approve Purchases
            </h1>
            <p className="text-gray-500 mt-1">
              Review and approve pending purchase requests
            </p>
          </div>
          <span className="bg-gray-200 text-gray-700 text-md px-4 py-2 rounded-lg font-roboto">
            {purchases.length} Pending
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl">
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-xl font-semibold">Purchase Requests</h2>
              <p className="text-sm text-gray-500">
                Review and approve customer purchase requests
              </p>
            </div>
            <div className="flex gap-2">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search purchases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-72 h-10 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 font-medium">Purchase ID</th>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Item</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Points</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPurchases.map((purchase) => (
                  <tr
                    key={purchase.id}
                    className="hover:bg-gray-50 border-b last:border-none"
                  >
                    <td className="px-6 py-4 font-mono text-sm">{purchase.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-indigo-200">
                          <img
                            src={purchase.user.avatar || "/placeholder.svg"}
                            alt={purchase.user.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{purchase.user.name}</p>
                          <p className="text-xs text-gray-500">
                            {purchase.user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">{purchase.item}</td>
                    <td className="px-6 py-4 font-bold text-lg">
                      {purchase.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 border border-primary text-primary rounded-md text-xs">
                        {purchase.points.toLocaleString()} pts
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{purchase.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(purchase.id)}
                          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm"
                        >
                          <Check className="w-4 h-4" /> Approve
                        </button>
                        <button
                          onClick={() => handleReject(purchase.id)}
                          className="flex items-center gap-1 px-3 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 text-sm"
                        >
                          <X className="w-4 h-4" /> Reject
                        </button>
                        <button className="px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {filteredPurchases.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
                <p className="text-gray-500">
                  No pending purchase requests to review.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
