import { useEffect, useState } from "react";
import axios from "axios";

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
              <section key={apartment.id}>
                <h1>{apartment.title}</h1>
                <img src={apartment.img} alt={apartment.title} /> <br />
                <button>More Details!</button>
              </section>
            );
          })
        : "loading......"}
    </>
  );
}

export default ApartmentList;
