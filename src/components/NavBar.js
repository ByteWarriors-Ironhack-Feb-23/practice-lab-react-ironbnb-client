import { NavLink } from "react-router-dom"


function NavBar(){
    return(
    <nav>
        <NavLink to={"/"} > Home</NavLink>
        <NavLink to={"/apartments"} >apartments</NavLink>
        <NavLink to={"/apartments/create"} > create</NavLink>
    </nav>
    )
}

export default NavBar