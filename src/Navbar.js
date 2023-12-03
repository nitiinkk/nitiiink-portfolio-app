import "./styles/Navbar.css";
import React from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav-elements">
        <nav>
            <ul>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/bookshelf">Bookshelf</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
        <hr/>
        </div>
    );
}
export default Navbar;