import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ApartmentDetails() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  console.log("ID: ",id)
  console.log(id)
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/apartments/${id}`)
      .then((response) => {
        setApartment(response.data);
      })
      .catch((error) => console.log("Error from data API... ", error));
  }, [id]);
  console.log(`URL: ${process.env.REACT_APP_APIURL}/apartments/${id}`)
  return (
    <>
      {apartment ? <h1>{apartment.title}  <br /><img src={apartment.img} alt={apartment.title} /></h1>: "Loading...."}
      
    </>
  );
}

export default ApartmentDetails;
