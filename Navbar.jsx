import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">

        EcoSphere AI

      </div>

      <div className="navbar-right">

        <FaBell className="icon"/>

        <FaUserCircle className="icon"/>

        <span>Admin</span>

      </div>

    </div>
  );
}

export default Navbar;