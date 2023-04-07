import { useEffect, useState } from "react";
import axios from "axios";

function ApartmentsList () {
  const [apartments, setApartments] = useState([]);
  const url="https:ironbnb-m3.herokuapp.com"

  useEffect(() => {
    axios.get(url + "/apartments")
      .then(response => {
        setApartments(response.data)
      })
      .catch(e => {
        console.log("error getting apartment list from API", e)
      })
  }, []);

  return (
    <div>
      <h1>This is the apartments list page</h1>
      {apartments.map( (apartment) => {
        return (
          <div key={apartment._id}>
            <h1>{apartment.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default ApartmentsList;