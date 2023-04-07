// import ironhackersImg from "./assets/ironhackers.avif";
import "./App.css";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apartments, setApartments] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((response) => {
        setApartments(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const loadApartments = () => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((response) => {
        setApartments(response.data);
      })
      .catch((e) => {
        console.log("error getting characters from API...", e);
      });
  };

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apartments"
          element={
            apartments ? (
              <ApartmentList apartments={apartments} />
            ) : (
              <p>loading....</p>
            )
          }
        />
        <Route
          path="/apartments/:apartmentId"
          element={
            apartments ? (
              <ApartmentDetails apartments={apartments} />
            ) : (
              <p>loading....</p>
            )
          }
        />
        <Route
          path="/apartments/create"
          element={
            apartments ? (
              <CreateApartment loadApartments={loadApartments} />
            ) : (
              <p>loading....</p>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
