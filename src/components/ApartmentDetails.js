import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ApartmentsDetails () {

const url="https:ironbnb-m3.herokuapp.com";
const {apartmentId} = useParams();

const [apartmentDetails, setApartmentDetails] = useState([]);

useEffect(() => {
  axios.get(url + `/apartments/${apartmentId}`)
    .then(response => {
      
      setApartmentDetails(response.data)
    })
    .catch(e => {
      console.log("error getting apartment list from API", e)
    })
}, [apartmentId])


  return (
    <div>
    <h1>This is the apartment details page</h1>
    <h2>{apartmentDetails.title}</h2>
    <img src={apartmentDetails.img} alt={apartmentDetails.title}></img>
    <h2>{apartmentDetails.pricePerDay}</h2>
    </div>

  )
}

export default ApartmentsDetails;