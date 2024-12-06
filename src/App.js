import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Inicio from "./components/Inicio";
import AgregarInsumos from "./components/AgregarInsumos";
import RestarInsumos from "./components/RestarInsumos";
import Inventario from "./components/Inventario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/agregar-insumos" element={<AgregarInsumos />} />
        <Route path="/restar-insumos" element={<RestarInsumos />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </Router>
  );
}

export default App;
