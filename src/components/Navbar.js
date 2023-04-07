import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success mb-3">
      <NavLink className="navbar-brand ms-5 white-text" to={'/'}>IronBnB</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to={'/apartments'}>Apartments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/apartments/create'}>Add Your House 🏠</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;