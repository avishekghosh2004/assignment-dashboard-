import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

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
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
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
          fill: "white",
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}

export default function Dashboard() {
  const nav = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white text-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 shadow-2xl  transition-transform z-40 w-56
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b font-bold text-lg text-black">
          Menu
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded hover:bg-gray-200 cursor-pointer"
            aria-label="Close sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="p-4 space-y-2">
          <li>
            <button
              onClick={() => {
                nav("/extra");
                setSidebarOpen(false);
              }}
              className="w-full text-left px-2 py-1 rounded hover:bg-gray-200 cursor-pointer text-black"
            >
              Extra Page
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col min-h-screen ml-0 transition-all">
        <header className="w-full flex items-center gap-4 px-6 py-4 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded hover:bg-gray-200 cursor-pointer"
            aria-label="Open sidebar"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="font-bold text-2xl">Dashboard</span>
        </header>

        <main className="w-full max-w-3xl mx-auto mt-8 space-y-8 flex-1 flex flex-col items-center justify-center">
          <section className="bg-card p-6 rounded-lg shadow-lg w-full">
            <h2 className="font-semibold mb-4">Demo Line Chart</h2>
            <SimpleLineChart />
          </section>

          <section className="bg-card p-6 rounded-lg shadow-xl w-full">
            <h2 className="font-semibold mb-4">Demo Pie Chart</h2>
            <PieChartWithCustomizedLabel />
          </section>
        </main>
      </div>
    </div>
  );
}
