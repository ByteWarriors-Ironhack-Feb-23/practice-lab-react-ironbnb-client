import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import ApartmentDetail from "./components/ApartmentDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
