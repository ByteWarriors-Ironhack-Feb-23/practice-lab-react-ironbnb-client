import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ApartmentDetails() {

    const {apartmentId} = useParams();

    const [apartmentDetails, setApartmentDetails] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_APIURL}/apartments/${apartmentId}`)
            .then(response => {
                setApartmentDetails(response.data)
            })
            .catch((e) => {
                console.log(e);
            });
    }, [apartmentId]);

    const renderDetails = () => {
        return (
            <div>
                <h1>Apartment Details</h1>
                <h1>{apartmentDetails.title}</h1>
                <img src={apartmentDetails.img} alt={apartmentDetails.title} />
                <h2>Price: €{apartmentDetails.pricePerDay}</h2>
            </div>
        )
    }

    return (
        <div>
            {apartmentDetails ? renderDetails() : <p>Loading...</p>}
        </div>
    )
}


export default ApartmentDetails;