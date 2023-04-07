import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
        <NavBar />

    <Routes>
      <Route path='/' element={ <HomePage />} ></Route>
      <Route path="/apartments" element={ <ApartmentsList />} ></Route>
      <Route path="/apartments/:id" element={ <ApartmentDetails />} ></Route>
      <Route path="/apartments/create" element={ <CreateApartment />} ></Route>
    </Routes>

    </div>
  );
}

export default App;
