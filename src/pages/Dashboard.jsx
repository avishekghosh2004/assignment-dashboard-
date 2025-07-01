import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export function SimpleLineChart() {
  return (
    <LineChart
      height={300}
      series={[
        { data: pData, label: "pv" },
        { data: uData, label: "uv" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      yAxis={[{ width: 50 }]}
      margin={margin}
    />
  );
}
const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}

export default function Dashboard() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="min-h-screen p-6 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-slate-200"
          >
            ⋮
          </button>
          {menuOpen && (
            <ul className="absolute right-0 mt-2 bg-card shadow rounded">
              <li>
                <button
                  onClick={() => nav("/extra")}
                  className="px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Go to Extra Page
                </button>
              </li>
            </ul>
          )}
        </div>
      </header>

      <section className="bg-card p-6 rounded-lg shadow">
         <h2 className="font-semibold mb-4">Demo Line Chart</h2>
        <SimpleLineChart />
      </section>

      <section className="bg-card p-6 rounded-lg shadow">
        <h2 className="font-semibold mb-4">Demo Pie Chart</h2>
        <PieChartWithCustomizedLabel />
      </section>
    </div>
  );
}
