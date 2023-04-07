import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";

function ApartmentsList() {

    const [apartments, setApartments] = useState([])



    /* useEffect(() => {
        axios.get(`https://ironbnb-m3.herokuapp.com/apartments`)
            .then(response => {
                setApartments(response.data);
            })
            .catch(e => {
                console.log("error getting apartments from API...", e);
            })
    }, []); */

    useEffect(() => {
        axios.get(process.env.REACT_APP_APIURL + "/apartments")
            .then(response => {
                setApartments(response.data);
            })
            .catch(e => {
                console.log("error getting apartments from API...", e);
            })
    }, []);

    return (
      <>
        <h1>List of Apartments</h1>
        <div>
          {apartments ? (
            apartments.map((apartmentDetails, index) => {
              return (
                <section key={index} className="box">
                  <h1>{apartmentDetails.title} </h1>
                  <img src={apartmentDetails.img} alt={apartmentDetails.title} />
                  <Link to={`/apartments/${apartmentDetails._id}`}>More details</Link>
                </section>
              );
            })
          ) : (<p>loading....</p>
          )}
        </div>
      </>
    );
}

export default ApartmentsList;