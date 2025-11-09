import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";

// 🚗 Autos
import X6 from "./pages/x6";
import M3 from "./pages/m3";
import M240i from "./pages/m240i";
import X6m from "./pages/x6m";
import Serie4 from "./pages/serie4";
import Z4 from "./pages/z4";

// 📄 Otras páginas
import Configura from "./pages/configura";
import Contacto from "./pages/contacto";
import Cotizacion from "./pages/cotizacion";
import QuienesSomos from "./pages/quienesomos";
import Registrarse from "./pages/registrarse";
import TestDrive from "./pages/testdrive";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/x6" element={<X6 />} />
        <Route path="/m3" element={<M3 />} />
        <Route path="/m240i" element={<M240i />} />
        <Route path="/x6m" element={<X6m />} />
        <Route path="/serie4" element={<Serie4 />} />
        <Route path="/z4" element={<Z4 />} />
        <Route path="/configura" element={<Configura />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/testdrive" element={<TestDrive />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
