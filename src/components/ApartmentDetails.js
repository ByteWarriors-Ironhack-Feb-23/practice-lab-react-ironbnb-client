import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ApartmentDetails = () => {
  const { apartmentId } = useParams();

  const [apartmentDetails, setApartmentDetails] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "apartments/" + apartmentId)
      .then((response) => {
        setApartmentDetails(response.data);
      })
      .catch((err) => console.error(err));
  }, [apartmentId]);

  const renderDetails = () => {
    return (
      <div>
        <h1>{apartmentDetails.title}</h1>
        Price per day: {apartmentDetails.pricePerDay} <br/>
        <img src={apartmentDetails.img}></img>
      </div>
    )
  }

  return (
    <>
    {apartmentDetails ? renderDetails() : <h1>still loading</h1>}
    </>
  );
};

export default ApartmentDetails;
