import { Search, Filter, Eye, MessageSquare, Award } from "lucide-react";
import { useState } from "react";

export default function CustomerInfo() {
  const customerData = [
    {
      id: "CUST-001",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1 (555) 123-4567",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      points: 2450,
      status: "Gold",
      joinDate: "Jan 2023",
      totalSpent: "$1,245.50",
      lastActivity: "2 hours ago",
    },
    {
      id: "CUST-002",
      name: "Mike Chen",
      email: "mike@example.com",
      phone: "+1 (555) 234-5678",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      points: 1890,
      status: "Silver",
      joinDate: "Mar 2023",
      totalSpent: "$890.25",
      lastActivity: "1 day ago",
    },
    {
      id: "CUST-003",
      name: "Emma Davis",
      email: "emma@example.com",
      phone: "+1 (555) 345-6789",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      points: 3200,
      status: "Platinum",
      joinDate: "Dec 2022",
      totalSpent: "$2,150.75",
      lastActivity: "30 minutes ago",
    },
    {
      id: "CUST-004",
      name: "Alex Rodriguez",
      email: "alex@example.com",
      phone: "+1 (555) 456-7890",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      points: 1250,
      status: "Bronze",
      joinDate: "Jun 2023",
      totalSpent: "$567.30",
      lastActivity: "3 days ago",
    },
    {
      id: "CUST-005",
      name: "Lisa Wang",
      email: "lisa@example.com",
      phone: "+1 (555) 567-8901",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      points: 2800,
      status: "Gold",
      joinDate: "Feb 2023",
      totalSpent: "$1,890.40",
      lastActivity: "5 hours ago",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(customerData);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() === "") {
      setSearchResults(customerData);
    } else {
      const filtered = customerData.filter(
        (customer) =>
          customer.name.toLowerCase().includes(value.toLowerCase()) ||
          customer.email.toLowerCase().includes(value.toLowerCase()) ||
          customer.id.toLowerCase().includes(value.toLowerCase()) ||
          customer.phone.includes(value)
      );
      setSearchResults(filtered);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
                Customer Lookup
              </h1>
              <p className="text-gray-500 mt-1">
                Search and manage customer information
              </p>
            </div>
            <span className="bg-gray-200 text-gray-700 text-lg px-4 py-2 rounded-lg">
              {searchResults.length} Results
            </span>
          </div>

          {/* Search Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-semibold">Customer Search</h2>
                <p className="text-sm text-gray-500">
                  Find customers by name, email, ID, or phone number
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                <Filter className="w-4 h-4" /> Advanced Filter
              </button>
            </div>

            <div className="p-6">
              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, email, customer ID, or phone..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-12 h-12 w-full text-lg rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((customer) => (
                  <div
                    key={customer.id}
                    className="border-2 rounded-xl p-4 bg-white hover:border-primary transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                          customer.status === "Platinum"
                            ? "bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {customer.status}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        {customer.id}
                      </span>
                    </div>

                    {/* Avatar + Name */}
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-indigo-200">
                        <img
                          src={customer.avatar || "/placeholder.svg"}
                          alt={customer.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {customer.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Points:</span>
                        <span className="font-bold text-primary">
                          {customer.points.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Total Spent:</span>
                        <span className="font-medium">
                          {customer.totalSpent}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Joined:</span>
                        <span className="font-medium">{customer.joinDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Active:</span>
                        <span className="font-medium text-green-600">
                          {customer.lastActivity}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4">
                      <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-primary text-white hover:bg-primary text-sm">
                        <Eye className="w-4 h-4" /> View
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm">
                        <MessageSquare className="w-4 h-4" /> Contact
                      </button>
                      <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm">
                        <Award className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {searchResults.length === 0 && searchTerm && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    No customers found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search terms or check the spelling.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
