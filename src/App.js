import './App.css';
import NavBar from "./components/NavBar";
import{Route,Routes} from"react-router-dom";
import ApartmentsList from './components/ApartmentsList';




function App() {

  
  return (
    <div className="App">
      <NavBar/>
<Routes>
  <Route path="/apartments" element={<ApartmentsList/>}
  />
  </Routes>
  
    </div>
  );
}

export default App;
