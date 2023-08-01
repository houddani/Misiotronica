import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Misiotrónica<i class="fa-solid fa-microchip"></i>
          </Link>
          
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sobre-nosotros"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/venta" className="nav-links" onClick={closeMobileMenu}>
                Venta
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
