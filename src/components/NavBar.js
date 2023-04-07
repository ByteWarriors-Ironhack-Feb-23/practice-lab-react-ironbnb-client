import { NavLink } from "react-router-dom"

function NavBar (){
return (
    <nav>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/apartmentlist">ApartmentList</NavLink> |
        <NavLink to="/createapartment">CreateApartment</NavLink> |
      </nav>
)}

export default NavBar