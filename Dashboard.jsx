import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ScoreCard from "../components/ScoreCard";
import ChartCard from "../components/ChartCard";
import RankingCard from "../components/RankingCard";
import NotificationCard from "../components/NotificationCard";

import XPCard from "../components/XPCard";
import Badges from "../components/Badges";
import Leaderboard from "../components/Leaderboard";
import Rewards from "../components/Rewards";
import ExportReport from "../components/ExportReport";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "../styles/Dashboard.css";


const carbonData = [
  { month: "Jan", carbon: 120 },
  { month: "Feb", carbon: 110 },
  { month: "Mar", carbon: 90 },
  { month: "Apr", carbon: 75 },
  { month: "May", carbon: 65 },
  { month: "Jun", carbon: 50 },
];


function Dashboard() {

  return (

    <div className="dashboard">

      <Sidebar />


      <div className="main">

        <Navbar />


        <div className="content">


          <h1>Welcome Back 👋</h1>

          <p>
            EcoSphere AI ESG Dashboard
          </p>



          {/* ESG SCORE CARDS */}

          <div className="score-grid">

            <ScoreCard 
              title="Overall ESG" 
              value="82%" 
              color="#2E7D32" 
            />

            <ScoreCard 
              title="Environmental" 
              value="74%" 
              color="#43A047" 
            />

            <ScoreCard 
              title="Social" 
              value="88%" 
              color="#039BE5" 
            />

            <ScoreCard 
              title="Governance" 
              value="83%" 
              color="#F9A825" 
            />

          </div>




          {/* CARBON CHART */}

          <ChartCard title="Carbon Emission Trend">

            <ResponsiveContainer 
              width="100%" 
              height={300}
            >

              <LineChart data={carbonData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="carbon"
                  stroke="#2E7D32"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </ChartCard>





          {/* RANKING + NOTIFICATION */}

          <div className="bottom-grid">

            <RankingCard />

            <NotificationCard />

          </div>





          {/* GAMIFICATION */}

          <h2 className="section-title">
            🎮 Sustainability Gamification
          </h2>


          <div className="gamification-grid">


            <XPCard />


            <Badges />


            <Leaderboard />


            <Rewards />


            <ExportReport />


          </div>



        </div>

      </div>

    </div>

  );
}


export default Dashboard;
