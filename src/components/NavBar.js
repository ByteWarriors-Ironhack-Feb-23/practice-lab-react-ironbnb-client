import { Link, NavLink, Route, Routes } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/apartments">Apartments list</NavLink>
      <NavLink to="/apartments/create">Create apartment</NavLink>
    </div>
  );
}

export default NavBar;
