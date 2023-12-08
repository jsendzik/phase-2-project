import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav>
            <NavLink
             to="/">
                Home
             </NavLink>
             <NavLink
             to="/about">
                About
             </NavLink>
             <NavLink
             to="/models">
                Models
             </NavLink>
        </nav>
    )
}

export default NavBar