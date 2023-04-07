import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails'
import CreateApartment from './components/CreateApartment';
import  { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/apartments" element={<ApartmentsList/>} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails/>} />
        <Route path="/create-apartment" element={<CreateApartment/>} />
      </Routes>
    </div>
  );
}

export default App;
