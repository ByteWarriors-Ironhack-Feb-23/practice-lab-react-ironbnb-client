import "./App.css";
import { Routes, Route } from "react-router-dom";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  console.log("app is rendered");
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments/" element={<ApartmentsList />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
