import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function ApartmentDetails () {


const {apartmentId} = useParams();

const [apartment, setApartment] = useState(null);

useEffect(() => {
  axios.get( `https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
    .then((response) => {
      console.log(response)
      setApartment(response.data)
    })
    .catch(e => {
      console.log("error getting apartment list from API", e)
    })
}, [apartmentId])

  const renderApartment = () => {
    return(
      <div>
      <h1>This is the apartment details page</h1>
    <h2>{apartment.title}</h2>
    <img src={apartment.img} alt={apartment.title}></img>
    <h2>{apartment.pricePerDay}</h2>
    </div>
    )
  }
  return (
    <div>
     {apartment ? renderApartment() : <p> loading...</p>}
     <Link to={"/apartments"}>Go back to apartments</Link>
    </div>
  )
}

export default ApartmentDetails;