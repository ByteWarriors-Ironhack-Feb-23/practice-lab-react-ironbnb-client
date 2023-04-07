import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ApartmentList() {
  // const baseURL = process.env.REACT_APP_APIURL
  const [apartments, setApartments] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/apartments`)
      .then((response) => {
        setApartments(response.data);
      })
      .catch((error) => console.log("Error from data API... ", error));
  }, []);
  console.log(apartments);
  return (
    <>
      <h1>ApartmentList</h1>
      {apartments
        ? apartments.map((apartment) => {
            return (
              <section key={apartment._id}>
                <h1>{apartment.title}</h1>
                <img src={apartment.img} alt={apartment.title} /> <br />
                <Link to={`/apartments/${apartment._id}`}><button>More Details!</button></Link>
              </section>
            );
          })
        : "loading......"}
    </>
  );
}

export default ApartmentList;
