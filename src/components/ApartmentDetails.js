import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ApartmentDetails(){
    const [apartment, setApartment] = useState(null)
    const {id} = useParams();
    
    
    useEffect(()=>{
        axios.get("https://ironbnb-m3.herokuapp.com/apartments/" + id)
            .then( response => {
                setApartment(response.data);

            })
            .catch( err => console.log("error getting partment by id", err))
    }, [id])

    return (
      <div>
        <h1>ApartmentDetails</h1>
        {apartment ?         <div className="card">
          <img src={apartment.img} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{apartment.title}</h5>
            <p className="card-text">{apartment.pricePerDay}</p>
          </div>
        </div> : <p>...loading</p>}

      </div>
    );
}

export default ApartmentDetails;