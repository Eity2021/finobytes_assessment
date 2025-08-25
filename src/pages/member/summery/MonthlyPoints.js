import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
export default function MonthlyPoints({ pointsData }) {
  return (
    <div>
      {" "}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-1">Monthly Points Earned</h2>
        <p className="text-sm text-gray-500 mb-4">
          Your point earning trend over the last 6 months
        </p>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pointsData.monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="points" fill="#568412" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
