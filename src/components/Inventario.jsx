import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

function Inventory() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    // Example data; replace with actual data source
    {
      cat: "A",
      insumo: "Harina",
      cantidad: 50,
      medida: "kg",
      formato: "Saco",
      fechaRecepcion: "2024-01-01",
      fechaVencimiento: "2025-01-01",
      precioProm: 1000,
    },
  ]);

  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 bg-pink-200 p-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Inventario
          </h1>
        </header>
        <div className="flex justify-center mb-6">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded shadow-lg">
            Filtrar
          </button>
        </div>
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-purple-300 text-gray-800">
              {[
                "Cat",
                "Insumo",
                "Cantidad",
                "Medida",
                "Formato",
                "Fecha recepción",
                "Fecha vencimiento",
                "Precio prom",
              ].map((header) => (
                <th
                  key={header}
                  className="border border-gray-300 p-3 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`$ {
                  index % 2 === 0 ? "bg-purple-100" : "bg-purple-200"
                } hover:bg-purple-300 transition-colors duration-200`}
              >
                <td className="border border-gray-300 p-3">{product.cat}</td>
                <td className="border border-gray-300 p-3">{product.insumo}</td>
                <td className="border border-gray-300 p-3">{product.cantidad}</td>
                <td className="border border-gray-300 p-3">{product.medida}</td>
                <td className="border border-gray-300 p-3">{product.formato}</td>
                <td className="border border-gray-300 p-3">{product.fechaRecepcion}</td>
                <td className="border border-gray-300 p-3">{product.fechaVencimiento}</td>
                <td className="border border-gray-300 p-3">{product.precioProm}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center gap-6">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-lg"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-lg"
            onClick={() => alert("Guardar funcionalidad pendiente")}
          >
            Guardar
          </button>
        </div>
      </main>
    </div>
  );
}

export default Inventory;
