import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails'
import CreateApartment from './components/CreateApartment';
import  { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

function App() {

  

  return (
    <div className="App">
      
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/apartments" element={<ApartmentsList/>} />
        <Route path="/apartments/:Id" element={<ApartmentDetails/>} />
        <Route path="/create-apartment" element={<CreateApartment/>} />
      </Routes>
    </div>
  );
}

export default App;
