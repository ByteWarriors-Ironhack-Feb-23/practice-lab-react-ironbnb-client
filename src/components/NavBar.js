import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <header>
      <h1>NavBar</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apartments/">Apartments</NavLink>
          </li>
          <li>
            <NavLink to="/apartments/create">Add Apartment</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
