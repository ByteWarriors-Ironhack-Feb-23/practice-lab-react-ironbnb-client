import axios from "axios";
import { useEffect, useState } from "react";

function ApartmentsList() {
  const baseURL = "https://ironbnb-m3.herokuapp.com";

  const [apartmentsList, setApartmentsList] = useState(null);

  const fetchApartmentsList = async () => {
    try {
      const res = await axios.get(baseURL + "/apartments");
      setApartmentsList([...res.data]);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchApartmentsList();
  }, []);

  /*const displayApartmentList = () => {
    return apartmentsList.map((apartment, index) => {
      return apartment.img && <img src={apartment.image}></img>;
    });
  };*/
  const displayApartmentList = () => {
    return apartmentsList.map((apartment) => {
      return (
        <div key={apartment._id}>
          <h1>{apartment.title}</h1>
          {apartment.img ? (
            <img src={apartment.img} alt={apartment.title}></img>
          ) : (
            ""
          )}
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Apartments List</h1>
      {apartmentsList ? displayApartmentList() : <p>..loading</p>}
    </div>
  );
}

export default ApartmentsList;
