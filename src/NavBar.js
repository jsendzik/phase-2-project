import React from "react";
import { NavLink } from "react-router-dom";
import "./index1.css"

function NavBar () {
    return (
        <nav>
            <NavLink
             to="/"
             className="nav-link">
                Home
             </NavLink>

             <NavLink
             to="/about"
             className="nav-link">
                About
             </NavLink>

             <NavLink
             to="/models"
             className="nav-link">
                Models
             </NavLink>

             <NavLink
             to="/create"
             className="nav-link">
                Create
             </NavLink>
        </nav>
    )
}

export default NavBar