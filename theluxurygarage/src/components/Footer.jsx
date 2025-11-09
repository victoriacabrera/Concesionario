import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">The Luxury Garage</div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>Sobre nosotros</h4>
          <ul>
            <li>Contactanos</li>
            <li>Visitanos</li>
            <li>Trabajá con nosotros</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Postventa</h4>
          <ul>
            <li>Repuestos</li>
            <li>Accesorios</li>
            <li>Recall Airbag</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Institucional</h4>
          <ul>
            <li>Política de privacidad</li>
            <li>Noticias</li>
            <li>Trayectoria</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <div className="social-icon">FB</div>
        <div className="social-icon">IG</div>
        <div className="social-icon">TW</div>
        <div className="social-icon">LI</div>
      </div>
    </div>
  );
}
