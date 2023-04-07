import { useEffect, useState } from "react";
import axios from "axios";

function ApartmentsList () {



   const [apartments, setApartments] = useState([]);

   useEffect(() => {
     axios.get(process.env.REACT_APP_APIURL + '/apartments')
     .then(response => {
      console.log(response)
       setApartments(response.data)
     })
     .catch(e => {
       console.log("error getting apartment list from API", e)
     })
   },[]);


  


  return (
    <h1>This is the apartments list  page</h1>
  )
}

export default ApartmentsList;