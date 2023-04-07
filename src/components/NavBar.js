import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |
      <NavLink to="/apartments/create">Create Apartment</NavLink> |
      <NavLink to="/apartments">Apartment List</NavLink> |
    </nav>
  );
}

export default NavBar;
