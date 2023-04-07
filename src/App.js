import './App.css';
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import { Link, NavLink, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1><Navbar>
         <NavLink to="/"><HomePage/></NavLink>
          <NavLink to="/apartments"><ApartmentList/></NavLink>
          <NavLink to="/apartments/:id"><ApartmentDetails/></NavLink>
          <NavLink to="/apartments/create"><CreateApartment/></NavLink>

      </Navbar></h1>

      <h1><HomePage/></h1>
      <h1><ApartmentList/></h1>
      <h1><ApartmentDetails/></h1>
      <h1><CreateApartment/></h1>
     
    </div>
  );
}

export default App;
