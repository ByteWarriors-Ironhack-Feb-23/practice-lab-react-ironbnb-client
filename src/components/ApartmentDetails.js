import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ApartmentDetails() {
  const { apartmentId } = useParams();
  const [ApartmentDetails, setApartmentDetails] = useState(null);

  console.log("apartmentId..", apartmentId);

  return <h1>Apartment Details</h1>;
}

export default ApartmentDetails;
