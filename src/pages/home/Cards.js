import { FileText, CheckCircle, Clock, Trash2, TrendingUp, TrendingDown, Users, Award, Gift, DollarSign, Zap, Star, Plus } from "lucide-react"

export default function Cards() {

  const recentUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      points: 2450,
      status: "Gold",
      avatar: "/diverse-woman-portrait.png",
    },
    {
      name: "Mike Chen",
      email: "mike@example.com",
      points: 1890,
      status: "Silver",
      avatar: "/thoughtful-man.png",
    },
    {
      name: "Emma Davis",
      email: "emma@example.com",
      points: 3200,
      status: "Platinum",
      avatar: "/diverse-woman-portrait.png",
    },
    {
      name: "Alex Rodriguez",
      email: "alex@example.com",
      points: 1250,
      status: "Bronze",
      avatar: "/thoughtful-man.png",
    },
    { name: "Lisa Wang", email: "lisa@example.com", points: 2800, status: "Gold", avatar: "/diverse-woman-portrait.png" },
  ]

  const recentRewards = [
    { name: "50% Off Premium", type: "Discount", cost: 500, claimed: 234, total: 500 },
    { name: "Free Shipping", type: "Benefit", cost: 200, claimed: 456, total: 1000 },
    { name: "$10 Gift Card", type: "Voucher", cost: 1000, claimed: 89, total: 200 },
    { name: "VIP Access", type: "Experience", cost: 2000, claimed: 12, total: 50 },
  ]

  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      changeIcon: TrendingUp,
      changeColor: "text-green-500",
      icon: Users,
      iconColor: "text-indigo-500",
      bgGradient: "from-indigo-500/20 via-indigo-500/10 to-indigo-500/5",
      border: "border-indigo-500/30",
      shadow: "hover:shadow-indigo-500/20",
      valueGradient: "from-indigo-500 to-indigo-400",
    },
    {
      title: "Points Issued",
      value: "2.4M",
      change: "+8.2%",
      changeIcon: Zap,
      changeColor: "text-pink-500",
      icon: Award,
      iconColor: "text-pink-500",
      bgGradient: "from-pink-500/20 via-pink-500/10 to-pink-500/5",
      border: "border-pink-500/30",
      shadow: "hover:shadow-pink-500/20",
      valueGradient: "from-pink-500 to-pink-400",
    },
    {
      title: "Rewards Claimed",
      value: "1,234",
      change: "+15.3%",
      changeIcon: Star,
      changeColor: "text-emerald-500",
      icon: Gift,
      iconColor: "text-emerald-500",
      bgGradient: "from-emerald-500/20 via-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/30",
      shadow: "hover:shadow-emerald-500/20",
      valueGradient: "from-emerald-500 to-emerald-400",
    },
    {
      title: "Revenue Impact",
      value: "$45.2K",
      change: "+22.1%",
      changeIcon: TrendingUp,
      changeColor: "text-orange-500",
      icon: DollarSign,
      iconColor: "text-orange-500",
      bgGradient: "from-orange-500/20 via-orange-500/10 to-orange-500/5",
      border: "border-orange-500/30",
      shadow: "hover:shadow-orange-500/20",
      valueGradient: "from-orange-500 to-orange-400",
    },
  ];


  return (
    <div >
      <div className="container mx-auto p-6">
        <div className="space-y-6">
          {/* KPI Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const ChangeIcon = stat.changeIcon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.bgGradient} border ${stat.border} rounded-xl p-4 transition-all duration-300 hover:scale-105 ${stat.shadow}`}
                >
                  <div className="flex items-center justify-between pb-2">
                    <p className="text-sm font-medium text-gray-800">{stat.title}</p>
                    <div className={`p-2 ${stat.bgGradient} rounded-lg`}>
                      <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.valueGradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <ChangeIcon className={`w-3 h-3 ${stat.changeColor}`} />
                    <span className={`${stat.changeColor} font-medium`}>
                      {stat.change}
                    </span>{" "}
                    from last month
                  </p>
                </div>
              );
            })}
          </div>




          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2 font-semibold text-gray-800">
                  <Users className="w-5 h-5 text-indigo-500" />
                  Recent Users
                </span>
                <button className="flex items-center px-3 py-1 text-sm rounded-md text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition">
                  <Plus className="w-4 h-4 mr-1" />
                  Add User
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-4">Latest user registrations and activity</p>

              <div className="space-y-3">
                {recentUsers.map((user, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border-2 border-indigo-200" />
                      ) : (
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 to-pink-200 text-gray-700 font-semibold">
                          {user.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-2 py-1 text-xs rounded-md font-medium ${user.status === "Platinum"
                          ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                          : "bg-gray-200 text-gray-600"
                          }`}
                      >
                        {user.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1 font-medium">{user.points.toLocaleString()} pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Rewards */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2 font-semibold text-gray-800">
                  <Gift className="w-5 h-5 text-pink-500" />
                  Popular Rewards
                </span>
                <button className="flex items-center px-3 py-1 text-sm rounded-md text-white bg-gradient-to-r from-pink-500 to-emerald-500 hover:from-pink-600 hover:to-emerald-600 transition">
                  <Plus className="w-4 h-4 mr-1" />
                  Create Reward
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-4">Most claimed rewards this month</p>

              <div className="space-y-3">
                {recentRewards.map((reward, i) => (
                  <div key={i} className="space-y-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{reward.name}</p>
                        <p className="text-xs text-gray-500">
                          {reward.type} • <span className="font-medium text-pink-500">{reward.cost} points</span>
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs border border-pink-400 text-pink-500 rounded-md">
                        {reward.claimed}/{reward.total}
                      </span>
                    </div>
                    {/* progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-pink-500 rounded-full"
                        style={{ width: `${(reward.claimed / reward.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
