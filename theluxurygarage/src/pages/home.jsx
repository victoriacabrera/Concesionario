import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      {/*Header con imagen BMW i8*/}
      <div className="header-with-image">
        <div className="dimmer"></div>
        <div className="page-title">
          <h1 className="main-title">The Luxury Garage</h1>
          <p className="subtitle">Innovación, diseño, excelencia</p>
        </div>
      </div>

      {/*Navegación superior*/}
      <div className="navigation">
        <div className="logo">
          <img
            src="imagenes/logo.png"
            alt="Logo The Luxury Garage"
            style={{ height: "80px" }}
          />
        </div>
      </div>

      <div className="nav-items">
        <a href="testdrive.html" className="nav-link">
          Agendar test drive
        </a>
        <a href="configura.html" className="nav-link">
          Configura tu auto
        </a>
        <a href="quienesomos.html" className="nav-link">
          ¿Quiénes somos?
        </a>
        <a href="contacto.html" className="nav-link">
          Contacto
        </a>
        <a href="registrarse.html" className="nav-link">
          Registrarse
        </a>
      </div>

      {/*Galería de imágenes*/}
      {/*BMW X6*/}

      <div className="gallery-image image-1">
        <div className="image-overlay"></div>
        <div className="image-content">
          <button className="image-text" onClick={() => navigate("/bmwx6")}>
            Ver detalles
          </button>
        </div>
      </div>

      <div className="image-title title-1">BMW X6</div>

      {/* BMW M240*/}
      <a href="m240i.html" className="gallery-link">
        <div className="gallery-image image-2">
          <div className="image-overlay"></div>
          <div className="image-content">
            <div className="image-text">Ver detalles</div>
          </div>
        </div>
      </a>
      <div className="image-title title-2">BMW M240i xDrive Coupé</div>

      {/*BMW M3 COMPETITION */}
      <a href="m3.html" className="gallery-link">
        <div className="gallery-image image-3">
          <div className="image-overlay"></div>
          <div className="image-content">
            <div className="image-text">Ver detalles</div>
          </div>
        </div>
      </a>
      <div className="image-title title-3">BMW M3 Competition</div>

      {/*BMW X6 M */}
      <a href="x6m.html" className="gallery-link">
        <div className="gallery-image image-4">
          <div className="image-overlay"></div>
          <div className="image-content">
            <div className="image-text">Ver detalles</div>
          </div>
        </div>
      </a>
      <div className="image-title title-4">BMW X6 M</div>

      {/* BMW seri 4 coupe*/}
      <a href="serie4.html" className="gallery-link">
        <div className="gallery-image image-5">
          <div className="image-overlay"></div>
          <div className="image-content">
            <div className="image-text">Ver detalles</div>
          </div>
        </div>
      </a>
      <div className="image-title title-5">BMW Serie 4 Coupé </div>

      {/* BMW Z4 Roadster*/}
      <a href="z4.html" className="gallery-link">
        <div className="gallery-image image-6">
          <div className="image-overlay"></div>
          <div className="image-content">
            <div className="image-text">Ver detalles</div>
          </div>
        </div>
      </a>
      <div className="image-title title-6">BMW Z4 Roadster</div>

      {/*Lineas decorativas*/}
      <div className="decorative-line line-1"></div>
      <div className="decorative-line line-2"></div>
      <div className="decorative-line line-3"></div>

      {/*Footer */}
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
    </div>
  );
};
