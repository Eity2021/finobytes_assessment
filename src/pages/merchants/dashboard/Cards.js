import {
    Users,
    Gift,
    Award,
    DollarSign,
} from "lucide-react"

export default function Cards() {
    const statsData = [
        {
            title: "Total Users",
            value: "12,847",
            growth: "+12.5%",
            desc: "from last month",
            icon: <Users className="h-5 w-5 text-primary" />,
            bg: "from-blue-500/20 via-blue-500/10 to-blue-500/5",
            shadow: "shadow-blue-500/20",
            text: "from-blue-500 to-blue-400",
            growthText: "text-blue-500",
        },
        {
            title: "Points Issued",
            value: "2.4M",
            growth: "+8.2%",
            desc: "from last month",
            icon: <Award className="h-5 w-5 text-green-500" />,
            bg: "from-green-500/20 via-green-500/10 to-green-500/5",
            shadow: "shadow-green-500/20",
            text: "from-green-500 to-green-400",
            growthText: "text-green-500",
        },
        {
            title: "Rewards Claimed",
            value: "1,234",
            growth: "+15.3%",
            desc: "from last month",
            icon: <Gift className="h-5 w-5 text-pink-500" />,
            bg: "from-pink-500/20 via-pink-500/10 to-pink-500/5",
            shadow: "shadow-pink-500/20",
            text: "from-pink-500 to-pink-400",
            growthText: "text-pink-500",
        },
        {
            title: "Revenue Impact",
            value: "$45.2K",
            growth: "+22.1%",
            desc: "from last month",
            icon: <DollarSign className="h-5 w-5 text-purple-500" />,
            bg: "from-purple-500/20 via-purple-500/10 to-purple-500/5",
            shadow: "shadow-purple-500/20",
            text: "from-purple-500 to-purple-400",
            growthText: "text-purple-500",
        },
    ];
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-br ${stat.bg} border border-gray-200 
                      hover:shadow-lg ${stat.shadow} 
                      transition-all duration-300 hover:scale-105 rounded-xl p-4`}
                    >
                        {/* Header */}
                        <div className="flex flex-row items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-gray-700">{stat.title}</h3>
                            <div className="p-2 bg-white/50 rounded-lg">{stat.icon}</div>
                        </div>

                        {/* Value */}
                        <div
                            className={`text-3xl font-bold bg-gradient-to-r ${stat.text} 
                        bg-clip-text text-transparent`}
                        >
                            {stat.value}
                        </div>

                        {/* Growth */}
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <span className={`${stat.growthText} font-medium`}>
                                {stat.growth}
                            </span>{" "}
                            {stat.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
