import { Save } from "lucide-react";
import { useState } from "react";
import Points from "./Points";
import Limits from "./Limits";
import Bonus from "./Bonus";
import Benefits from "./Benefits";

export default function ContributorRate() {
  const [contributionRate, setContributionRate] = useState(2.5);
  const [bonusRate, setBonusRate] = useState(1.0);
  const [minimumPurchase, setMinimumPurchase] = useState("10.00");
  const [maximumPoints, setMaximumPoints] = useState("10000");
  const [enableBonuses, setEnableBonuses] = useState(true);
  const [enableReferrals, setEnableReferrals] = useState(true);

  const handleSave = () => {
    console.log("Settings saved:", {
      contributionRate,
      bonusRate,
      minimumPurchase,
      maximumPoints,
      enableBonuses,
      enableReferrals,
    });
  };
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className=" mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Contribution Rate Settings
              </h1>
              <p className="text-gray-500 mt-1">
                Configure how customers earn points and rewards
              </p>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#3b680c] to-[#b5bd20] text-white font-medium shadow hover:opacity-90"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Points
              bonusRate={bonusRate}
              contributionRate={contributionRate}
              setContributionRate={setContributionRate}
              setBonusRate={setBonusRate}
            ></Points>
            <Limits
              setMinimumPurchase={setMinimumPurchase}
              minimumPurchase={minimumPurchase}
              maximumPoints={maximumPoints}
              setMaximumPoints={setMaximumPoints}
            ></Limits>
            <Bonus setEnableReferrals={setEnableReferrals} enableReferrals={enableReferrals} enableBonuses={enableBonuses} setEnableBonuses={setEnableBonuses}></Bonus>
            <Benefits></Benefits>
          </div>
        </div>
      </div>
    </div>
  );
}
