import React from "react";

export default function Navbar() {
  return (
    <div className="navigation">
      <div className="logo">
        <img
          src="./Captura de pantalla 2025-09-21 212847.png"
          alt="Logo The Luxury Garage"
          style={{ height: "80px" }}
        />
      </div>
      <div className="nav-items">
        <a href="quienesomos.html" className="nav-link">
          ¿Quiénes somos?
        </a>
        <a href="#" className="nav-link">
          Contacto
        </a>
        <a href="#" className="nav-link">
          Novedades
        </a>
        <a href="registrarse.html" className="nav-button">
          Registrarse
        </a>
      </div>
    </div>
  );
}
