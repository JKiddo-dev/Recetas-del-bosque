import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/inicio");
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-300 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-sm sm:max-w-md">
        <div className="mb-6">
          <img
            src="logo.png"
            alt="Recetas del Bosque Logo"
            className="mx-auto max-w-[80%]"
          />
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex items-center bg-gray-300 rounded-full px-4 py-2 border border-gray-300">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent border-none text-sm outline-none"
            />
          </div>
          <div className="flex items-center bg-gray-300 rounded-full px-4 py-2 border border-gray-300">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent border-none text-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white rounded-full px-6 py-2 text-base hover:bg-purple-500 transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
