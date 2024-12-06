import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`bg-[#DA94D3] h-full flex flex-col items-center p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-60"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <img
          src="logo.png"
          alt="Recetas del Bosque"
          className={`transition-opacity duration-300 ${isCollapsed ? "opacity-0" : "opacity-100"}`}
        />
        <button
          onClick={toggleSidebar}
          className="text-black text-lg transform transition-transform duration-300"
        >
          {isCollapsed ? "\u2192" : "\u2190"}
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-4 w-full">
        <Link to="/inicio" className="w-full">
          <button
            className={`bg-purple-500 text-white rounded-md py-2 w-full text-center transition-opacity duration-300 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            Inicio
          </button>
        </Link>
        <Link to="/inventario" className="w-full">
          <button
            className={`bg-purple-500 text-white rounded-md py-2 w-full text-center transition-opacity duration-300 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            Inventario
          </button>
        </Link>
        {/* Uncomment when these routes are ready */}
        {/* <button className="sidebar-btn">Planificar producción</button>
        <button className="sidebar-btn">Mermas</button>
        <button className="sidebar-btn">Informes</button> */}
      </div>
    </aside>
  );
};

export default SideBar;