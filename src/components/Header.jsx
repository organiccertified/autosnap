import { Link, NavLink } from "react-router-dom"
import { HiOutlineCamera } from "react-icons/hi2";


export default function Header() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header className="navbar">
            <Link className="site-logo" to="/"><HiOutlineCamera/></Link>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/services"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Services
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}