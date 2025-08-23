import LineBarChart from "./LineBarChart";
import WidthBarCharts from "./WidthBarCharts";



export default function Charts() {
    return (
        <div className='container mx-auto p-6'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2' >
                <LineBarChart></LineBarChart>
                <WidthBarCharts></WidthBarCharts>
            </div>
        </div>
    )
}
