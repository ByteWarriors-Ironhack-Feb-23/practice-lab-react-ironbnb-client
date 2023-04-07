import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ApartmentList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment"

function App() {
  return (
    <div className="App">
     <header>
     <NavBar />
     </header>
     <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/apartments" element={<ApartmentList/>} />
        <Route path={"/apartments/:id"} element={<ApartmentDetails />} />
        <Route path={"/apartments/create"} element={<CreateApartment/>} />
      </Routes>

    </div>
  );
}

export default App;
