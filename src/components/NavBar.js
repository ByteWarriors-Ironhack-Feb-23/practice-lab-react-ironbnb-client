import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/apartments">Apartments</NavLink>
      <NavLink to="/apartments/create">Create New Apartment</NavLink>
    </nav>
  );
}

export default NavBar;
