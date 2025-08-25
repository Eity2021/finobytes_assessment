import { Zap } from "lucide-react";
export default function ActiveChallenge({ memberData }) {
  return (
    <div>
      <div className="bg-white shadow rounded-xl p-6 h-full">
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
              <p className="text-xs text-gray-500">{c.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
