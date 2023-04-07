import './App.css';
import NavBar from "./components/NavBar";
import{Route,Routes} from"react-router-dom";
import ApartmentsList from './components/ApartmentsList';
import ApartmentDetails from './components/ApartmentDetails';




function App() {

  
  return (
    <div className="App">
      <NavBar/>
<Routes>
  <Route path="/apartments" element={<ApartmentsList/>}/>
  <Route path='/apartments/:apartmentsId' element={<ApartmentDetails/>}/>
  </Routes>
  
    </div>
  );
}

export default App;
