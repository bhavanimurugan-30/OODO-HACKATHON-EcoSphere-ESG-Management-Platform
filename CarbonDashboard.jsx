import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChartCard from "../components/ChartCard";
import "../styles/CarbonDashboard.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const carbonData = [
  { month: "Jan", emission: 120 },
  { month: "Feb", emission: 110 },
  { month: "Mar", emission: 98 },
  { month: "Apr", emission: 85 },
  { month: "May", emission: 74 },
  { month: "Jun", emission: 60 },
];

const pieData = [
  { name: "Electricity", value: 35 },
  { name: "Travel", value: 25 },
  { name: "Fuel", value: 20 },
  { name: "Waste", value: 20 },
];

const COLORS = [
  "#2E7D32",
  "#43A047",
  "#66BB6A",
  "#81C784",
];

function CarbonDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">

          <h1>Carbon Dashboard</h1>

          <p>
            Monitor organization carbon emissions and sustainability performance.
          </p>

          <div className="carbon-cards">

            <div className="carbon-card">
              <h3>Total Emission</h3>
              <h2>820 kg</h2>
            </div>

            <div className="carbon-card">
              <h3>Emission Reduced</h3>
              <h2>18%</h2>
            </div>

            <div className="carbon-card">
              <h3>Departments</h3>
              <h2>8</h2>
            </div>

            <div className="carbon-card">
              <h3>ESG Score</h3>
              <h2>82%</h2>
            </div>

          </div>

          <div className="chart-grid">

            <ChartCard title="Monthly Carbon Emission">

              <ResponsiveContainer width="100%" height={300}>

                <LineChart data={carbonData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="emission"
                    stroke="#2E7D32"
                    strokeWidth={3}
                  />

                </LineChart>

              </ResponsiveContainer>

            </ChartCard>

            <ChartCard title="Emission Sources">

              <ResponsiveContainer width="100%" height={300}>

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={90}
                    label
                  >

                    {pieData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </ChartCard>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CarbonDashboard;