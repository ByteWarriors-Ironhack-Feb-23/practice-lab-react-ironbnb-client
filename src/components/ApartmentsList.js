import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ApartmentsList(){
    const [apartment, setApartment] = useState([])   

    
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_APIURL}/apartments/`)
            .then( response => {
                setApartment(response.data)
                console.log(response.data)
            })
            .catch( err => console.log("error getting apartments from API", err))
    }, [])

    return(
        <div>
            <h1>ApartmentsList</h1>
            
            <ul>
            {apartment
             ?apartment.map( apartment => {
              console.log(apartment);
                    return (  
                         <li> 
                         <Link to={`/apartments/${apartment._id}`}>More details</Link>
                    <img src={apartment.img} alt="img" />
                             {apartment.title} {apartment.pricePerDay}
                           </li> )
                })
            : <p><div className="loading"></div></p> }
               
            </ul>
    
        </div>
    )
}

export default ApartmentsList;