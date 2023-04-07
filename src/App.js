import './App.css';
import { Route, Routes, NavLink} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";

function App() {
  return (
    <div className="App">
      <h1>Apartments WebPage!</h1>
      
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/apartmentlist" element={<ApartmentList />} />
        <Route path="/apartmentdetails" element={<ApartmentDetails />} />
        <Route path="/createapartment" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
