import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apartmentsList, setApartmentsList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/apartments")
      .then((response) => {
        console.log("response from API", response.data);
        setApartmentsList(response.data);
      })
      .catch((e) => {
        console.log("error getting apartment details from API...", e);
      });
  }, []);

  const createApartment = (newApartment) => {
    console.log("newApartment.....", newApartment);

    axios
      .post(process.env.REACT_APP_APIURL + "/apartments", newApartment)
      .then((responseAfterCreating) => {
        console.log(responseAfterCreating);
        return axios.get(process.env.REACT_APP_APIURL + "/apartments");
      })
      .then((updatedListFromAPI) => {
        console.log("updatedListFromAPI....", updatedListFromAPI.data);
        setApartmentsList(updatedListFromAPI.data);
        navigate("/apartments");
      });
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apartments"
          element={<ApartmentsList apartmentsList={apartmentsList} />}
        />
        <Route
          path="/apartments/create"
          element={<CreateApartment callbackToAdd={createApartment} />}
        />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
