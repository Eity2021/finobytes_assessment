import PointsOverview from "./PointsOverview";
import Benefits from "./Benefits";
import ActiveChallenge from "./ActiveChallenge";
import Activities from "./Activities";

export default function MemberDashboard() {
  const memberData = {
    name: "Member",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PointsOverview memberData={memberData} />
          <Benefits
            progressPercentage={progressPercentage}
            memberData={memberData}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveChallenge memberData={memberData}></ActiveChallenge>
          <Activities memberData={memberData} />
        </div>
      </div>
    </div>
  );
}
