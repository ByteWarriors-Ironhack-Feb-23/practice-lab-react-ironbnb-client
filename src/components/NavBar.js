import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){

    return (
        <div>
            <nav>
                <NavLink to={"/"} >HomePage</NavLink>
                <NavLink to={"/apartments"} >ApartmentsList</NavLink>
                <NavLink to={"/apartments/create"} >CreateApartments</NavLink>
            </nav>
        </div>
    )
    
}

export default NavBar;