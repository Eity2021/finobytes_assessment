import Cards from "./Cards";
import Rewards from "./Rewards";
import RecentActivity from "./RecentActivity";

export default function MerchantDashboard() {
  return (
    <div>
      <Cards></Cards>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
        <RecentActivity></RecentActivity>
        <Rewards></Rewards>
      </div>
    </div>
  );
}
