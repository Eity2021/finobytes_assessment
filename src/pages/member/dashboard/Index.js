import React from "react";
import {
  Trophy,
  Gift,
  Star,
  TrendingUp,
  Calendar,
  Target,
  Zap,
} from "lucide-react";
export default function MemberDashboard() {
  const memberData = {
    name: "Alex Johnson",
    memberSince: "January 2023",
    totalPoints: 2847,
    pointsToNextReward: 653,
    nextRewardLevel: "Gold",
    recentActivity: [
      { action: "Purchase at Store A", points: 150, date: "2 days ago" },
      { action: "Referral Bonus", points: 500, date: "1 week ago" },
      { action: "Birthday Bonus", points: 200, date: "2 weeks ago" },
      { action: "Survey Completion", points: 50, date: "3 weeks ago" },
    ],
    challenges: [
      {
        name: "Social Sharer",
        progress: 75,
        reward: 100,
        description: "Share 5 posts",
      },
      {
        name: "Frequent Buyer",
        progress: 60,
        reward: 250,
        description: "Make 10 purchases",
      },
      {
        name: "Review Master",
        progress: 40,
        reward: 150,
        description: "Write 8 reviews",
      },
    ],
    benefits: [
      { name: "Free Shipping", status: "active", icon: "🚚" },
      { name: "Birthday Discount", status: "active", icon: "🎂" },
      { name: "Early Access", status: "locked", icon: "⚡" },
      { name: "VIP Support", status: "locked", icon: "👑" },
    ],
  };

  const progressPercentage =
    (memberData.totalPoints /
      (memberData.totalPoints + memberData.pointsToNextReward)) *
    100;
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-xl font-bold">
              AJ
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {memberData.name}!
              </h1>
              <p className="text-gray-500">
                Member since {memberData.memberSince}
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white px-4 py-2 rounded-lg">
            View Points Summary
          </button>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Points Overview */}
          <div className="bg-white shadow rounded-xl p-6 lg:col-span-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
              <Trophy className="h-5 w-5 text-primary" />
              Points Overview
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Track your rewards progress
            </p>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {memberData.totalPoints.toLocaleString()}
              </div>
              <p className="text-gray-500">Total Points Earned</p>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress to {memberData.nextRewardLevel}</span>
                <span>{memberData.pointsToNextReward} points to go</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-primary rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-semibold">+350</div>
                <div className="text-sm text-gray-500">This Month</div>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-semibold">Silver</div>
                <div className="text-sm text-gray-500">Current Tier</div>
              </div>
            </div>
          </div>

          {/* Member Benefits */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
              <Gift className="h-5 w-5 text-primary" />
              Member Benefits
            </h2>
            <p className="text-sm text-gray-500 mb-4">Your current perks</p>
            <div className="space-y-3">
              {memberData.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{benefit.icon}</span>
                    <span className="font-medium">{benefit.name}</span>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      benefit.status === "active"
                        ? "bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {benefit.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Challenges */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-1">
              <Zap className="h-5 w-5 text-primary" />
              Active Challenges
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Complete challenges to earn bonus points
            </p>
            <div className="space-y-4">
              {memberData.challenges.map((c, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{c.name}</h4>
                      <p className="text-sm text-gray-500">{c.description}</p>
                    </div>
                    <span className="px-2 py-1 text-xs border border-[#3b680c] text-primary rounded">
                      +{c.reward} pts
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    {c.progress}% complete
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-xl p-6">
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
      </div>
    </div>
  );
}
