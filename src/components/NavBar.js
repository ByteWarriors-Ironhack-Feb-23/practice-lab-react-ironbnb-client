import { NavLink } from "react-router-dom";

function NavBar(){
    return(
  <div>
        
         <div><NavLink to="/">HomePage</NavLink></div>
        
          <div><NavLink to="/apartments">Apartment List</NavLink></div>

          <div><NavLink to="/apartments/create">Create Apartment</NavLink></div>

  </div>
      

    )
}

export default NavBar;