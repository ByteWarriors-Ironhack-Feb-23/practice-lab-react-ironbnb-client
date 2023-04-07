import './App.css';
import NavBar from "./components/NavBar";
import{Route,Routes} from"react-router-dom";
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment';




function App() {

  
  return (
    <div className="App">
      <NavBar/>
<Routes>
  <Route path="/apartments" element={<ApartmentsList/>}/>
  <Route path='/apartments/:apartmentsId' element={<ApartmentDetails/>}/>
  <Route path='/apartments/create' element={<CreateApartment/>} />
  </Routes>
  
    </div>
  );
}

export default App;
