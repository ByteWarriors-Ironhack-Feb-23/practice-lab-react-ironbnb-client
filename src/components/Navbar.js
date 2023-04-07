import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {

    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/apartments">Apartments</NavLink>
            <NavLink to="/apartments/create">Create</NavLink>
        </nav>
    );
}

export default Navbar;