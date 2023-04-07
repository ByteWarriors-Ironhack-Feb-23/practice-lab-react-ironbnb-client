import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ApartmentsList = (props) => {
  const [apartmentsList, setApartmentsList] = useState(null);

  const loadData = () => {
    axios
      .get(process.env.REACT_APP_APIURL + "apartments/")
      .then((response) => {
        console.log(response);
        setApartmentsList(response.data);
      })
      .catch((err) => console.error(err));
  };

  const renderList = () => {
    return (
      <section>
        {apartmentsList.map((apartment, index) => {
          return (
            <div key={index}>
              <h3>{apartment.title}</h3>
              <Link to={apartment._id}> more details </Link>
            </div>
          );
        })}
      </section>
    );
  };

  useEffect(() => {
    loadData();
  }, []);
  // REACT_APP_APIURL;

  return (
    <>
      <h1>ApartmentsList</h1>
      {apartmentsList ? renderList() : <h2>still loading</h2>}
    </>
  );
};

export default ApartmentsList;
