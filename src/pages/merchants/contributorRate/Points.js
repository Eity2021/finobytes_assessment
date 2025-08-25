import {Percent } from "lucide-react";

export default function Points({bonusRate,contributionRate, setContributionRate, setBonusRate}) {
  return (
    <div>
          {/* Points Earning Rate */}
          <div className="bg-white rounded-xl shadow p-6 h-full">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Percent className="w-5 h-5 text-primary" />
              Points Earning Rate
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Set how many points customers earn per dollar spent
            </p>

            {/* Base Contribution Rate */}
            <div className="space-y-3 mb-6">
              <label className="text-base font-medium">Base Contribution Rate</label>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={contributionRate}
                onChange={(e) => setContributionRate(parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>0.1%</span>
                <span className="font-bold text-lg text-primary">
                  {contributionRate}% per $1
                </span>
                <span>10%</span>
              </div>
              <p className="text-sm text-gray-500">
                Customers will earn {contributionRate} points for every $1 spent
              </p>
            </div>

            <hr />

            {/* Bonus Multiplier */}
            <div className="space-y-3 mt-6">
              <label className="text-base font-medium">Bonus Multiplier</label>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={bonusRate}
                onChange={(e) => setBonusRate(parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1x</span>
                <span className="font-bold text-lg text-primary">
                  {bonusRate}x multiplier
                </span>
                <span>5x</span>
              </div>
              <p className="text-sm text-gray-500">
                Special promotions can multiply points by {bonusRate}x
              </p>
            </div>
          </div>
    </div>
  )
}
