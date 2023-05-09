import { useContext } from "react";
import { PresupuestoContext } from "./ContextPresupuestoApp";

export function InputPresupuesto() {
  const { capturarPresupuesto, handlerPresupuesto, presupuestoInicial } =
    useContext(PresupuestoContext);

  return (
    <div>
      <label htmlFor="Presupuesto">Ingresa Tu Presupuesto</label>
      <input
        type="number"
        onChange={handlerPresupuesto}
        id="Presupuesto"
        name="Presupuesto"
        value={presupuestoInicial}
        
      />
      <button onClick={capturarPresupuesto}
      disabled={!presupuestoInicial}>Calcular</button>
    </div>
  );
}
