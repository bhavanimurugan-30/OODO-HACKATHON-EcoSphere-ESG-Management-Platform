import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import {
  FaHome,
  FaLeaf,
  FaUsers,
  FaBalanceScale,
  FaBell,
  FaRobot,
  FaChartBar,
  FaCog
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>EcoSphere AI</h2>

      <ul>

        <li>
          <FaHome />
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <FaLeaf />
          <Link to="/environmental">Environmental</Link>
        </li>

        <li>
          <FaUsers />
          <Link to="/social">Social</Link>
        </li>

        <li>
          <FaBalanceScale />
          <Link to="/governance">Governance</Link>
        </li>

        <li>
          <FaBell />
          <Link to="/notifications">Notifications</Link>
        </li>

        <li>
          <FaRobot />
          <Link to="/copilot">AI Copilot</Link>
        </li>

        <li>
          <FaChartBar />
          <Link to="/dashboard">Reports</Link>
        </li>

        <li>
          <FaCog />
          <Link to="/dashboard">Settings</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;