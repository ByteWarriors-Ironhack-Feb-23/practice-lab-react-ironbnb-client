import { useParams } from 'react-router-dom';
import '../App.css';

const ApartmentDetails = (props) => {

    const {apartmentId} = useParams();

    const oneApartment = props.apartments.find(apartment => apartment._id === apartmentId)

    return(
        <>
            <h1>{oneApartment.title}</h1>
            <img src={oneApartment.img} alt={oneApartment.title} />
            <br />
            <p className='badge'>Price Per Day: {oneApartment.pricePerDay} €</p>
        </>
    )
}

export default ApartmentDetails;