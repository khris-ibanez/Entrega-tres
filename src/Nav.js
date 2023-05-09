import { useEffect, useState } from "react";

export function Fecha() {
  const [usuario, setUsuario] = useState("");
  const fecha = new Date();
  const date = `Fecha ${fecha.getDate()}/${
    fecha.getMonth() + 1
  }/${fecha.getFullYear()}`;

  const [pc, setPc] = useState("");
  useEffect(() => {
    setUsuario(Math.floor(Math.random() * 9999));
  }, []);

  const onOptionChange = (e) => {
    setPc(e.target.value);
  };

  return (
    <nav>
      <div>
        {date} - {`Bienvenido usuario numero ${usuario}`}
      </div>
      <h3>Seleccione el motivo para el presupuesto</h3>
      <label htmlFor="Vacaciones">Vacaciones</label>
      <input
        type={"radio"}
        name="Vacaciones"
        value={"Vacaciones"}
        checked={pc === "Vacaciones"}
        onChange={onOptionChange}
      />
      <label htmlFor="Estudio">Estudio</label>
      <input
        type={"radio"}
        name="Estudio"
        value={"Estudio"}
        checked={pc === "Estudio"}
        onChange={onOptionChange}
      />
      <h1>PRESUPUESTO PARA: {pc}</h1>
    </nav>
  );
}
