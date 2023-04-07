import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ApartmentDetails(props) {
  const { apartmentId } = useParams();

  const [ApartmentDetails, setApartmentDetails] = useState([]);

  console.log("apartmentId..", apartmentId);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/apartments/" + apartmentId)
      .then((response) => {
        console.log("response from API details", response.data);
        setApartmentDetails(response.data);
      })
      .catch((e) => {
        console.log("error getting apartment details from API...", e);
      });
  }, [apartmentId]);

  return (
    <>
      <h1>{ApartmentDetails.title}</h1>{" "}
      <h2>Price per Day: {ApartmentDetails.pricePerDay}</h2>
      <p>{ApartmentDetails.</p>
    </>
  );
}

export default ApartmentDetails;
