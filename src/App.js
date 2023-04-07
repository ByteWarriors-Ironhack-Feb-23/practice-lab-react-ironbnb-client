import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>  |{" "}
        <NavLink to="/apartments">Aparments</NavLink>  |{" "}
        <NavLink to="/apartments/create">Create</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
      </Routes>
     
    </div>
  );
} 

export default App;
