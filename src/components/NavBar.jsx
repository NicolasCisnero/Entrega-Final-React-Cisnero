import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row">
    <nav className="NavBar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <NavLink className="titulo" to="/"> Core Builds </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="categories collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/Categoria/Placas De Video"}>Placas De Video</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Categoria/Procesadores"}>Procesadores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Categoria/Memorias RAM"}>Memorias RAM</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Categoria/Motherboards"}>Motherboards</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Categoria/Gabinetes"}>Gabinetes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Categoria/Coolers"}>Coolers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Categoria/Fuentes"}>Fuentes</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
