import { NavLink } from "react-router-dom";
import ApartmentsList from "./ApartmentsList";
import './NavBar.css'
import CreateApartment from "./CreateApartment";
function NavBar () {
  return (
    <nav className="NavBar" style={{}}>
        <NavLink className="NavLink" to="/">HomePage</NavLink>
        <NavLink className="NavLink" to="/apartments" element={<ApartmentsList />}>Apartments</NavLink>
        <NavLink className="NavLink" to="/create-apartment" element={<CreateApartment />}>Create</NavLink>
      </nav>
  );
}

export default NavBar;