import { Link, useParams } from "react-router-dom";


function ApartmentDetails(props) {
    const { apartmentsId } = useParams();

    const apartmentDetails = props.apartments.find(apartment => apartment._id === apartmentsId)
    console.log(apartmentDetails);
    return (

        <div>
            <h1>test</h1>
            <h1>{apartmentDetails.title}</h1>
            <h2>{apartmentDetails.pricePerDay}</h2>
            <Link to={"/apartments"}>back</Link>
        </div>


    )

}

export default ApartmentDetails;