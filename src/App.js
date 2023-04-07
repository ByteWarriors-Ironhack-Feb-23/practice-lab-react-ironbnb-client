import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS IMPORTS
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import CreateApartment from './components/CreateApartment';
import ApartmentDetails from './components/ApartmentDetails';

function App() {

  const [apartments, setApartments] = useState(null);

  const loadApartments = () => {
    axios
      .get(process.env.REACT_APP_APIURL + '/apartments')
      .then((apartmentsArr) => {
        setApartments(apartmentsArr.data);
      })
      .catch((e) => {
        console.log("Error retrieving the apartments: ", e);
      });
  };

  useEffect(() => {
    loadApartments();
  }, []);

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/apartments"}
          element={
            apartments
              ? <ApartmentsList apartments={apartments} />
              : <div className='spinner-border'></div>
          } />
        <Route path={"/apartments/create"} element={<CreateApartment callbackToLoadApartments={loadApartments} />} />
        <Route path={"/apartments/:apartmentId"}
          element={
            apartments
              ? <ApartmentDetails apartments={apartments} />
              : <div className='spinner-border'></div>
          } />
      </Routes>

    </div>
  );
}

export default App;
