import Formulario from "./components/Formulario";
import { useState, Fragment } from "react";
import "./styles.css";

export default function App() {
  const [productos, guardarProductos] = useState([]);

  const agregarArticulosEstado = (producto) => {
    guardarProductos((productosPrevios) => {
      return [...productosPrevios, producto];
    });
  };

  return (
    <div className="App">
      <Formulario agregarArticulosEstado={agregarArticulosEstado} />
    </div>
  );
}
