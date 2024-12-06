import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const RestarInsumos = () => {
  const [producto, setProducto] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    producto: "",
    cantidad: "",
    precioUnitario: "",
    destino: "",
    modoPago: "",
    fase: "",
  });

  const navigate = useNavigate();

  const agregarProducto = () => {
    const camposVacios = Object.values(nuevoProducto).some((campo) => campo.trim() === "");
    if (camposVacios) {
      alert("Por favor, completa todos los campos antes de guardar.");
      return;
    }
    setProducto([...producto, { ...nuevoProducto, id: Date.now() }]);
    setModalVisible(false);
    setNuevoProducto({
      producto: "",
      cantidad: "",
      precioUnitario: "",
      destino: "",
      modoPago: "",
      fase: "",
    });
  };

  const eliminarProducto = (index) => {
    setProducto(producto.filter((_, i) => i !== index));
  };

  return (
        <div className="flex h-screen">
            <SideBar/>
            <main className="flex-1 bg-pink-200 p-6">

      <div className=" min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-black mb-6">Restar insumos</h1>

      <table className="w-3/4 max-w-3xl border-collapse bg-pink-100">
      <thead className="bg-purple-300">
          <tr>
            {["Producto", "Cantidad", "Precio unitario", "Destino", "Modo de pago", "Fase", "Acción"].map(
                (header) => (
                    <th key={header} className="border p-4 text-center whitespace-nowrap">
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {producto.map((item, index) => (
              <tr key={item.id} className="text-center">
              <td className="border p-4 whitespace-nowrap">{item.producto}</td>
              <td className="border p-4 whitespace-nowrap">{item.cantidad}</td>
              <td className="border p-4 whitespace-nowrap">{item.precioUnitario}</td>
              <td className="border p-4 whitespace-nowrap">{item.destino}</td>
              <td className="border p-4 whitespace-nowrap">{item.modoPago}</td>
              <td className="border p-4 whitespace-nowrap">{item.fase}</td>
              <td className="border p-4 whitespace-nowrap">
                <button
                  onClick={() => eliminarProducto(index)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                  Eliminar
                </button>
              </td>
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
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setModalVisible(true)}
        >
            Agregar Producto
        </button>
        <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => {
            // Functionality for "Guardar Insumos"
            }}
        >
            Restar Insumos
        </button>
    </div>

      {modalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-pink-400 p-8 rounded-md shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4 text-center">Agregar Nuevo Producto</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre producto"
                value={nuevoProducto.producto}
                onChange={(e) =>
                    setNuevoProducto({ ...nuevoProducto, producto: e.target.value })
                }
                className="w-full px-4 py-2 border border-black rounded"
                />
              <input
                type="text"
                placeholder="Cantidad (Ej: 123)"
                value={nuevoProducto.cantidad}
                onChange={(e) => {
                    const valor = e.target.value;
                    if (/^\d*$/.test(valor)) {
                        setNuevoProducto({ ...nuevoProducto, cantidad: valor });
                    }
                }}
                className="w-full px-4 py-2 border border-black rounded"
                />
              <input
                type="text"
                placeholder="Precio unitario"
                value={nuevoProducto.precioUnitario}
                onChange={(e) => {
                    const valor = e.target.value;
                    if (/^\d*$/.test(valor)) {
                        setNuevoProducto({ ...nuevoProducto, precioUnitario: valor });
                    }
                }}
                className="w-full px-4 py-2 border border-black rounded"
                />
              <input
                type="text"
                placeholder="Destino"
                value={nuevoProducto.destino}
                onChange={(e) =>
                    setNuevoProducto({ ...nuevoProducto, destino: e.target.value })
                }
                className="w-full px-4 py-2 border border-black rounded"
                />
              <select
                value={nuevoProducto.modoPago}
                onChange={(e) =>
                    setNuevoProducto({ ...nuevoProducto, modoPago: e.target.value })
                }
                className="w-full px-4 py-2 border border-black rounded"
                >
                <option value="">Seleccione un método de pago</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Debito">Débito</option>
                <option value="Credito">Crédito</option>
                <option value="Interno">Interno</option>
              </select>
              <input
                type="text"
                placeholder="Fase"
                value={nuevoProducto.fase}
                onChange={(e) => {
                    const valor = e.target.value;
                    if (/^[a-zA-Z\s]*$/.test(valor)) {
                        setNuevoProducto({ ...nuevoProducto, fase: valor });
                    }
                }}
                className="w-full px-4 py-2 border border-black rounded"
                />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={agregarProducto}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded"
                  >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded"
                  >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
      </main>
      </div>
  );
};

export default RestarInsumos;
