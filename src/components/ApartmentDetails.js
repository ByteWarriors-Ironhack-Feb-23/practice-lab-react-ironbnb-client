import { Link, useParams } from "react-router-dom";


function ApartmentDetails(props) {
    const { apartmentsId } = useParams();

    let AppartmentArr;

    axios
        .get(process.env.REACT_APP_APIURL + "/apartments")
        .then((apartmentsFromAPI) => {
            AppartmentArr = apartmentsFromAPI;

        })
        .catch(e => { console.log(e) })



    const apartmentDetails = AppartmentArr.apartments.find(apartment => apartment._id === apartmentsId)

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