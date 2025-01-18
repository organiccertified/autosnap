import { NavLink } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Header() {
  const activeStyles = {
    fontWeight: 600,
    textDecoration: "underline",
    color: "#5D2972",
  };

  return (
    <header className="navbar">
      <nav>
        <a
          href="https://www.facebook.com/autoSnapPhotobooth/"
          className="site-logo"
          target="_blank"
        >
          <FaSquareFacebook />
        </a>
        <a
          href="https://www.instagram.com/autosnapphotobooth/"
          className="site-logo"
          target="_blank"
        >
          <RiInstagramFill />
        </a>
        <NavLink
          to="/services"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Services
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
