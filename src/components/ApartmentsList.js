import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApartmentList() {
  const [apartmentsArr, setApartmentsArr] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/apartments")
      .then((response) => {
        setApartmentsArr(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderApartments = () => {
    return (
      <>
        

        {apartmentsArr.map((apartment) => {
          return (
            <div className="apartment" key={apartment.id}>
              <h2>{apartment.title}</h2>
              <img src={apartment.img} alt="" />
              <h3>Price per day: {apartment.pricePerDay} $</h3>
              <Link to={"/apartments"}> see details</Link>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
    <h1> apartments</h1>
    <div className="apartment-container">
    
      {apartmentsArr ? renderApartments() : <h1> Loading </h1>}
      
    </div>
    </>
  );
}

export default ApartmentList;
