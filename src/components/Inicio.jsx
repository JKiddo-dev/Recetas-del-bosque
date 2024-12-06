import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Inicio = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 bg-pink-300 p-6">
        <div className="flex justify-around mb-10 text-white">
          <Link to="/agregar-insumos">
            <button className="bg-purple-500 px-4 py-2 rounded-md text-sm hover:bg-purple-600">
              Agregar insumos
            </button>
          </Link>
          <Link to="/restar-insumos">
            <button className="bg-purple-500 px-4 py-2 rounded-md text-sm hover:bg-purple-600">
              Restar insumos
            </button>
          </Link>
          <Link to="/inventario">
            <button className="bg-purple-500 px-4 py-2 rounded-md text-sm hover:bg-purple-600">
              Detalle del inventario
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pink-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Insumos en cantidades bajas</h3>
            <p>Leche condensada - 5 tarros disp</p>
            <p>Leche evaporada - 3 tarros disp</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Pedidos de insumos</h3>
            <p>Lunes 20/Oct - Soprole</p>
            <p>Miércoles 22/Oct - Molino A</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Insumos próximos a vencer</h3>
            <p>Leche evaporada - Vence 1/Nov</p>
            <p>Huevos - Vence 30/Oct</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Entrega de insumos</h3>
            <p>Lunes 27/Oct - Soprole</p>
            <p>Miércoles 29/Oct - Molino A</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
