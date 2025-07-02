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
              className="w-full flex items-center gap-4 text-left px-4 py-3 rounded-lg hover:bg-blue-50 focus:bg-blue-100 transition-colors duration-150 cursor-pointer text-gray-800 font-semibold group"
            >
              <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition" viewBox="0 0 512 283.4" fill="currentColor">
                <path d="M417.22 240.9c15.67-1.72 29.89-9.47 35.23-23.8 41.62 26.61 59.55 9.73 59.55 66.3h-90.99c0-18.11-1.26-31.84-3.79-42.5zm-305.11 42.5c5.89-76.2 19.74-48.02 85.11-88.92 20.19 42.13 102.24 45.19 119.07 0 56.41 36.07 83.6 12.25 83.6 88.92H112.11zm100.52-92.24c-.87-1.13 2.28-8.89 3.02-10.14-8.54-7.6-15.28-15.27-16.72-31.05l-.92.02c-2.11-.02-4.15-.51-6.06-1.6-3.06-1.74-5.21-4.73-6.66-8.09-3.08-7.07-13.21-30.52 2.22-28.67-8.62-16.11 10.91-43.64-22.78-53.82 27.64-35.01 85.95-88.98 128.68-34.84 46.77 4.53 61.36 60.12 29.87 90.56 1.84.07 3.58.5 5.12 1.32 5.86 3.14 6.05 9.94 4.51 15.65-1.52 4.77-3.46 8-5.28 12.65-2.22 6.28-5.46 7.45-11.72 6.77-.32 15.53-7.49 23.15-17.15 32.26l2.64 8.95c-12.94 27.46-66.72 28.57-88.77.03zM0 283.4c4.34-56.23 12.43-36.12 60.67-66.3 6.28 13.11 20.68 21.09 36.16 23.44-2.53 9.96-4.3 22.89-5.66 40.13-.11.89-.17 1.8-.17 2.73H0zm72.04-68.75c-.65-.83 1.68-6.56 2.23-7.48-6.3-5.61-11.28-11.27-12.34-22.91l-.68.01c-1.56-.02-3.07-.38-4.48-1.18-2.25-1.28-3.84-3.49-4.91-5.97-2.27-5.21-9.74-22.52 1.64-21.15-6.36-11.89 8.05-32.21-16.81-39.72 20.4-25.83 63.42-65.65 94.95-25.71 34.52 3.35 45.28 44.37 22.04 66.83 1.36.05 2.65.36 3.78.97 4.32 2.32 4.47 7.34 3.33 11.55-1.12 3.52-2.55 5.9-3.89 9.34-1.64 4.63-4.03 5.49-8.66 4.99-.1 5.32-1.3 9.38-3.27 12.87l-2.96 1.17c-21.79 8.53-34.18 13.39-41.66 31.45-10.92-1.42-21.61-6.38-28.31-15.06zm297.1-18.3c-1.67-3.25-2.84-7.13-3.29-12.09l-.68.01c-1.56-.02-3.07-.38-4.47-1.18-2.26-1.28-3.85-3.49-4.92-5.97-2.27-5.21-9.74-22.52 1.65-21.15-6.37-11.89 8.04-32.21-16.82-39.72 20.4-25.83 63.42-65.65 94.96-25.71 34.51 3.35 45.28 44.37 22.04 66.83 1.36.05 2.64.36 3.78.97 4.32 2.32 4.46 7.34 3.32 11.55-1.12 3.52-2.55 5.9-3.89 9.34-1.64 4.63-4.03 5.49-8.65 4.99-.24 11.46-5.53 17.08-12.66 23.81l1.95 6.6c-4.46 9.47-15.51 14.69-27.67 15.42-8.04-19.6-22.85-25.57-44.65-33.7z"/>
              </svg>
              <span>Users</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setSidebarOpen(false);
              }}
              className="w-full flex items-center gap-4 text-left px-4 py-3 rounded-lg hover:bg-green-50 focus:bg-green-100 transition-colors duration-150 cursor-pointer text-gray-800 font-semibold group"
            >
              <svg className="w-6 h-6 text-green-600 group-hover:text-green-800 transition" viewBox="0 0 122.88 122.39" fill="currentColor">
                <path d="M4.59,122.39h113.7c2.52,0,4.59-2.08,4.59-4.63l-0.11-36.56c-0.01-2.49-0.36-3.78-1.26-6.11l-17.93-61.16 c-0.81-2.12-1.86-4.12-4.12-4.12H85.71v14.66h6.5l16.19,53.89l0,0H84.5l-10.91,14.7H49.38l-11-14.7H14.3l16.87-53.89h6V9.8H24.22 c-2.27,0-3.28,2.02-4.12,4.12L1.15,75.86c-0.91,2.28-1,3.58-1.01,6.06L0,117.76C0,120.31,2.07,122.39,4.59,122.39L4.59,122.39 L4.59,122.39z M52.74,0h17.41v37.46h14L61.46,63.47L38.73,37.46h14V0L52.74,0L52.74,0z"/>
              </svg>
              <span>Inbox</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setSidebarOpen(false);
              }}
              className="w-full flex items-center gap-4 text-left px-4 py-3 rounded-lg hover:bg-yellow-50 focus:bg-yellow-100 transition-colors duration-150 cursor-pointer text-gray-800 font-semibold group"
            >
              <svg className="w-6 h-6 text-yellow-600 group-hover:text-yellow-800 transition" viewBox="0 0 122.88 122.566" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.78,66.082h47.875c2.045,0,3.717,1.988,3.717,4.414v46.479 c0,2.43-1.671,4.416-3.717,4.416H3.78c-2.043,0-3.717-1.986-3.717-4.416V70.496C0.063,68.07,1.737,66.082,3.78,66.082L3.78,66.082z M71.224,0H119.1c2.046,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H71.224 c-2.045,0-3.714-1.984-3.714-4.413V4.415C67.51,1.986,69.179,0,71.224,0L71.224,0z M3.714,0h47.878 c2.045,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H3.714C1.671,55.307,0,53.323,0,50.894V4.415 C0,1.986,1.671,0,3.714,0L3.714,0z M71.287,67.26h47.876c2.043,0,3.717,1.986,3.717,4.416v46.479c0,2.426-1.674,4.412-3.717,4.412 H71.287c-2.045,0-3.717-1.986-3.717-4.412V71.676C67.57,69.246,69.242,67.26,71.287,67.26L71.287,67.26z"/>
              </svg>
              <span>Products</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                nav("/");
                setSidebarOpen(false);
              }}
              className="w-full flex items-center gap-4 text-left px-4 py-3 rounded-lg hover:bg-purple-50 focus:bg-purple-100 transition-colors duration-150 cursor-pointer text-gray-800 font-semibold group"
            >
              <svg className="w-6 h-6 text-purple-600 group-hover:text-purple-800 transition" viewBox="0 0 110.395 122.88" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M93.359,17.16L75.68,9.377L75.99,0h34.404v61.439v61.44H75.99l-0.311-6.835 l17.68-10.946V17.16L93.359,17.16z M82.029,79.239v-34.54H47.004V13.631L0,61.937l47.004,48.373v-31.07H82.029L82.029,79.239z"/>
              </svg>
              <span>Sign In</span>
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
