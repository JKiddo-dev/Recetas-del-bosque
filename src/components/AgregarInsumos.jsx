import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SideBar from "./SideBar";

const AgregarInsumos = () => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [insumos, setInsumos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoInsumo, setNuevoInsumo] = useState({
    insumo: "",
    cantidad: "",
    medida: "",
    formato: "",
    fechaRecepcion: "",
    fechaVencimiento: "",
    precioNeto: "",
  });

  const toggleSidebar = () => setSidebarCollapsed(!isSidebarCollapsed);

  const eliminarFila = (id) => {
    const nuevosInsumos = insumos.filter((item) => item.id !== id);
    setInsumos(nuevosInsumos);
  };

  const agregarNuevoInsumo = () => {
    const camposVacios = Object.values(nuevoInsumo).some((campo) => campo.trim() === "");
    if (camposVacios) {
      alert("Por favor, completa todos los campos antes de guardar.");
      return;
    }
    setInsumos([...insumos, { ...nuevoInsumo, id: Date.now() }]);
    setModalVisible(false);
    setNuevoInsumo({
      insumo: "",
      cantidad: "",
      medida: "",
      formato: "",
      fechaRecepcion: "",
      fechaVencimiento: "",
      precioNeto: "",
    });
  };

  return (
    <div className="flex h-screen">
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 bg-pink-200 p-6">
        <header className="mb-4">
          <h1 className="text-xl font-bold">Recepción de insumos</h1>
        </header>
        <div className="flex justify-center pt-48">
          <table className="w-3/4 max-w-3xl border-collapse bg-pink-100">
            <thead className="bg-purple-300">
              <tr>
                {[
                  "Insumo",
                  "Cantidad",
                  "Medida",
                  "Formato",
                  "Fecha Recepción",
                  "Fecha Vencimiento",
                  "Precio Neto",
                  "Acción",
                ].map((header, index) => (
                  <th key={index} className="border p-4 text-center whitespace-nowrap">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {insumos.map((insumo) => (
                <tr key={insumo.id} className="text-center">
                  <td className="border p-4 whitespace-nowrap">{insumo.insumo}</td>
                  <td className="border p-4 whitespace-nowrap">{insumo.cantidad}</td>
                  <td className="border p-4 whitespace-nowrap">{insumo.medida}</td>
                  <td className="border p-4 whitespace-nowrap">{insumo.formato}</td>
                  <td className="border p-4 whitespace-nowrap">{insumo.fechaRecepcion}</td>
                  <td className="border p-4 whitespace-nowrap">{insumo.fechaVencimiento}</td>
                  <td className="border p-4 whitespace-nowrap">{insumo.precioNeto}</td>
                  <td className="border p-4 whitespace-nowrap">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => eliminarFila(insumo.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
            Agregar Insumo
        </button>
        <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => {
            // Functionality for "Guardar Insumos"
            }}
        >
            Guardar Insumos
        </button>
    </div>

        {modalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
              <h3 className="text-lg font-semibold mb-4">Agregar Nuevo Insumo</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre Insumo (Solo texto)"
                  value={nuevoInsumo.insumo}
                  onChange={(e) => {
                    const valor = e.target.value;
                    if (/^[a-zA-Z\s]*$/.test(valor)) {  // Restriction: Only letters and spaces
                      setNuevoInsumo({ ...nuevoInsumo, insumo: valor });
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Cantidad (Ej: 123)"
                  value={nuevoInsumo.cantidad}
                  onChange={(e) => {
                    const valor = e.target.value;
                    if (/^\d*$/.test(valor)) {  // Restriction: Only numbers
                      setNuevoInsumo({ ...nuevoInsumo, cantidad: valor });
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
                <select
                  value={nuevoInsumo.medida}
                  onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, medida: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccione una medida</option>
                  <option value="g">Gramos</option>
                  <option value="kg">Kilogramos</option>
                  <option value="ml">Mililitros</option>
                  <option value="l">Litros</option>
                  <option value="unidad">Unidad</option>
                </select>
                <input
                  type="text"
                  placeholder="Formato"
                  value={nuevoInsumo.formato}
                  onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, formato: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="date"
                  value={nuevoInsumo.fechaRecepcion}
                  onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, fechaRecepcion: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="date"
                  value={nuevoInsumo.fechaVencimiento}
                  onChange={(e) => setNuevoInsumo({ ...nuevoInsumo, fechaVencimiento: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Precio Neto (Ej: 1234)"
                  value={nuevoInsumo.precioNeto}
                  onChange={(e) => {
                    const valor = e.target.value;
                    if (/^\d*$/.test(valor)) {  // Restriction: Only numbers
                      setNuevoInsumo({ ...nuevoInsumo, precioNeto: valor });
                    }
                  }}
                  className="w-full p-2 border rounded"
                />
              </form>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={agregarNuevoInsumo}
                >
                  Guardar
                </button>
                <button
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setModalVisible(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AgregarInsumos;
