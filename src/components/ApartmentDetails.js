import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ApartmentDetails() {

    const {apartmentId} = useParams();

    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_APIURL + `/apartments/${apartmentId}`)
            .then((response) => {
                setApartment(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    const renderApartment = () => {
        return (
            <>
                <h1>{apartment.title}</h1>
                <img src={apartment.img} alt={apartment.title} />
                <h2>Price: {apartment.pricePerDay}$</h2>
            </>
        );
    };

    return (
        <>
            {apartment ? renderApartment() : <h2>Loading...</h2>}
            <Link to={"/apartments"}>Return To Apartments</Link>
        </>        
    ); 
}

export default ApartmentDetails;