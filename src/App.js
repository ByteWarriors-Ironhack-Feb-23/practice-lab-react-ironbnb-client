
import './App.css';
import Navbar from "./components/Navbar"
import ApartmentsList from "./components/ApartmentsList";
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';



function App() {

  const [apartments, setApartments] = useState([]);




  useEffect(() => {
    resetApartments();
  }, [])

  const resetApartments = () => {
    axios
      .get(process.env.REACT_APP_APIURL + "/apartments")
      .then((apartmentsFromAPI) => {

        setApartments(apartmentsFromAPI.data);

      })
      .catch(e => { console.log(e) })
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/apartments/create' element={<CreateApartment resetApartments={resetApartments} />}></Route>
        <Route path="/apartments" element={<ApartmentsList apartments={apartments}></ApartmentsList>}></Route>
        <Route path='/apartments/:apartmentsId' element={<ApartmentDetails apartments={apartments}></ApartmentDetails>}></Route>

      </Routes>

      <h1>SOMETHING</h1>


    </div >
  );
}

export default App;
