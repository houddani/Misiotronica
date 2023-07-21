// eslink-disable-next-line import logo from './logo.svg';
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SobreNosotros from "./components/pages/SobreNosotros";
import Contacto from "./components/pages/Contacto";
import Venta from "./components/pages/Venta";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/venta" element={<Venta />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
