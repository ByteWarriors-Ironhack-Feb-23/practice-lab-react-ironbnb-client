import { Link } from 'react-router-dom';
import '../App.css';

const ApartmentsList = (props) => {
    return(
        <div className='list-container'>
            
            {props.apartments.map( (oneApartment) => {
                return(
                    <div key={oneApartment._id} className='card'>
                        <h2>{oneApartment.title}</h2>
                        <img src={oneApartment.img} alt={oneApartment.title}/>
                        <br />
                        <Link to={`/apartments/${oneApartment._id}`}>SEE DETAILS</Link>
                    </div>
                )
            })}
        </div> 
    )
}

export default ApartmentsList;