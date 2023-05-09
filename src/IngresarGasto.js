import { PresupuestoContext } from "./ContextPresupuestoApp";
import { useContext } from "react";
export function IngresarGasto() {
  const {
    handlerGastoName,
    handlerGastoValue,
    gastoValueInicial,
    gastoName,
    capturarGasto,
  } = useContext(PresupuestoContext);
  return (
    <div>
      <label htmlFor="GastoName">Ingresa El Nombre Del Gasto</label>
      <input
        value={gastoName}
        onChange={handlerGastoName}
        id="GastoName"
        name="GastoName"
      />
      <label htmlFor="GastoCantidad">Ingresa La Cantidad del Gasto</label>
      <input
        type="number"
        value={gastoValueInicial}
        onChange={handlerGastoValue}
        id="GastoCantidad"
        name="GastoCantidad"
      />
      <button onClick={capturarGasto}>Añadir Gasto</button>
    </div>
  );
}
