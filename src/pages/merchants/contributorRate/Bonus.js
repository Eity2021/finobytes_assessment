import { Gift } from "lucide-react";
export default function Bonus({
  setEnableReferrals,
  enableReferrals,
  enableBonuses,
  setEnableBonuses,
}) {
  return (
    <div>
      {/* Bonus Features */}
      <div className="bg-white rounded-xl shadow p-6 h-full">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <Gift className="w-5 h-5 text-pink-500" />
          Bonus Features
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enable or disable special earning opportunities
        </p>

        {/* Birthday Bonus */}
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="font-medium">Birthday Bonuses</p>
            <p className="text-sm text-gray-500">
              Give customers extra points on their birthday
            </p>
          </div>
          <input
            type="checkbox"
            checked={enableBonuses}
            onChange={(e) => setEnableBonuses(e.target.checked)}
            className="w-5 h-5 accent-pink-500"
          />
        </div>
        <hr />

        {/* Referral Program */}
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="font-medium">Referral Program</p>
            <p className="text-sm text-gray-500">
              Reward customers for referring friends
            </p>
          </div>
          <input
            type="checkbox"
            checked={enableReferrals}
            onChange={(e) => setEnableReferrals(e.target.checked)}
            className="w-5 h-5 accent-pink-500"
          />
        </div>
      </div>
    </div>
  );
}
