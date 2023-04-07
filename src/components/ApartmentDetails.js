import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ApartmentDetails(props) {
  const { apartmentId } = useParams();

  const [apartment, setApartment] = useState(null);

  console.log("apartmentId..", apartmentId);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/apartments/" + apartmentId)
      .then((response) => {
        console.log("response from API details", response.data);
        setApartment(response.data);
      })
      .catch((e) => {
        console.log("error getting apartment details from API...", e);
      });
  }, [apartmentId]);

  return (
    <>
      {apartment ? (
        <>
          <h1>{apartment.title}</h1>
          <h2>Price per Day: {apartment.pricePerDay}</h2>
          <img src={apartment.img} alt="" />
        </>
      ) : (
        "loading...."
      )}
    </>
  );
}

export default ApartmentDetails;
