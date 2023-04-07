import { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

function ApartmentsList(){
    const [apartment, setApartment] = useState([])   

    
    useEffect(() => {
        axios
            .get("https://ironbnb-m3.herokuapp.com/apartments")
            .then( response => {
                setApartment(response.data)
                console.log(response.data)
            })
            .catch( err => console.log("error getting apartments from API", err))
    }, [])

    return (
      <div>
        <h1>ApartmentsList</h1>
        <div className="container">
          {apartment ? (
            apartment.map((apartment) => {
              return (
                <div key={apartment._id} className="card">
                  <img src={apartment.img} className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">{apartment.title}</h5>
                    <p className="card-text">{apartment.pricePerDay}</p>
                    <NavLink to={`/apartments/:${apartment._id}`}>Get Details</NavLink>
                     
                
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              <div className="loading"></div>
            </p>
          )}
          </div>
      </div>
    );
}

export default ApartmentsList;

