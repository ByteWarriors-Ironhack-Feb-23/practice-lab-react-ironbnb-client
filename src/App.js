import './App.css';
import ApartmentDetails from './components/ApartmentDetails';
import ApartmentsList from './components/ApartmentsList';
import CreateApartment from './components/CreateApartment';
import HomePage from './components/HomePage';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route path="/apartments/create" element={<CreateApartment />}/>
      </Routes>
      
    </div>
  );
}

export default App;
