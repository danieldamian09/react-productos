import React, { useState } from "react";

function Formulario({ agregarArticulosEstado }) {
  const [producto, guardarProducto] = useState([
    {
      articulo: "",
      cantidad: ""
    }
  ]);

  const [error, guardarError] = useState(false);

  const { articulo, cantidad } = producto;

  const datosInputGuardar = (e) => {
    guardarProducto((productoPrevio) => {
      return {
        ...productoPrevio,
        [e.target.name]: e.target.value
      };
    });
  };

  const actualizarEstado = (e) => {
    e.preventDefault();

    //validar formulario
    if (articulo === "" || cantidad === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    agregarArticulosEstado(producto);
  };

  return (
    <div>
      <form onSubmit={actualizarEstado}>
        <label htmlFor="articulo">Articulo</label>
        <input
          type="text"
          name="articulo"
          value={articulo}
          onChange={datosInputGuardar}
        />
        <br />
        <br />
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          name="cantidad"
          value={cantidad}
          onChange={datosInputGuardar}
        />
        <br />
        <br />
        <button type="submit">Agregar</button>
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
}

export default Formulario;
