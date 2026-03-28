import React from "react";
import logo1 from "../assets/logo1.png";
const Navbar = () => {
  return (
    <div>
      
        <div id="divNavbar1"></div>
  <div id="divNavbar2"></div>
  <div id="divNavbar3"></div>
    
 
    <nav id="nav" className="navbar navbar-expand-lg navbar-custom">
      
      <div className="container-fluid bg-dark p-0 m-0" >


        <img src={logo1} alt="VHSFlix logo" className="logo" style={{height: "70px"}} />


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" >
          <ul  id="navbarText" className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a  className="nav-link" href="#">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Peliculas</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"href="#" role="button"data-bs-toggle="dropdown" >
                Categorías
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Acción</a></li>
                <li><a className="dropdown-item" href="#">Terror</a></li>
                  <li><a className="dropdown-item" href="#">Comedia</a></li>
                   <li><a className="dropdown-item" href="#">Documental</a></li>
              </ul>
            </li>

          </ul>

          {/* BUSCADOR */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar"/>
            <button className="btn btn-search" type="submit" id="buttonBuscar" >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
     
         
        <div id="divNavbar1"></div>
  <div id="divNavbar2"></div>
  <div id="divNavbar3"></div>
 
    </div>
        
  
  );
};



export default Navbar;