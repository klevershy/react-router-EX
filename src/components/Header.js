import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <h3>Klever SU</h3>
          </Link>
        </div>
        <nav className="listMenu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "isActive-link" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "isActive-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "isActive-link" : null)}
          >
            host
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "isActive-link" : null)}
          >
            Vans
          </NavLink>
        </nav>
      </div>
    </>
  );
}
