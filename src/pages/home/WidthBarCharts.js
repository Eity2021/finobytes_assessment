// import { CartesianGrid, XAxis, YAxis, Legend, BarChart, Bar, Tooltip } from 'recharts';
// import './charts.css';
// const data = [
//     { name: 'Jun', uv: 400, pv: 2400, amt: 2400 },
//     { name: 'July', uv: 300, pv: 2210, amt: 2290 },
//     { name: 'Aug', uv: 200, pv: 2290, amt: 2000 },
//     { name: 'Sept', uv: 500, pv: 2290, amt: 4000 },
// ];


// export default function WidthBarCharts() {
//     return (
//      <div className="focus:outline-none chart-container" tabIndex={-1}>
//       <BarChart width={735} height={420} data={data}>
//         <XAxis dataKey="name" stroke="#8884d8" />
//         <YAxis />
//         <Tooltip
//           wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}
//         />
//         <Legend
//           width={100}
//           wrapperStyle={{
//             top: 40,
//             right: 20,
//             backgroundColor: '#f5f5f5',
//             border: '1px solid #d5d5d5',
//             borderRadius: 3,
//             lineHeight: '40px',
//           }}
//         />
//         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//         <Bar dataKey="uv" fill="#8884d8" barSize={30} />
//       </BarChart>
//     </div>
//     )
// }
