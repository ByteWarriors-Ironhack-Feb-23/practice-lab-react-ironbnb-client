import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ApartmentDetails() {
  const { apartmentId } = useParams();

  const [apartmentDetails, setApartmentDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/${apartmentId}`)
      .then((response) => {
        setApartmentDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [apartmentId]);

  const renderDetails = () => {
    return (
      <div className="box">
        <img src={apartmentDetails.img} alt="" />
        <div>
          <h1>{apartmentDetails.title} </h1>
          <p>Price per day: {apartmentDetails.pricePerDay}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {apartmentDetails ? renderDetails() : <p>loading....</p>}

      <Link to="/">Back to Home</Link>
    </>
  );
}
