import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";

export default function HostLayout() {
  const activeStyles = {
    color: "green",
    fontWeight: "bold",
    textDecoration: "underline",
    background: "#162e16"
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          // className={(isActive) => (isActive ? "activeLink" : "no-Active")}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dasboard
        </NavLink>
        <NavLink
          to="/host/income"
          // className={(isActive) => (isActive ? "activeLink" : "no-Active")}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          // className={(isActive) => (isActive ? "activeLink" : "no-Active")}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          // className={(isActive) => (isActive ? "activeLink" : null)}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
