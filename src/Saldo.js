import { useContext } from "react";
import { PresupuestoContext } from "./ContextPresupuestoApp";

export function Saldo() {
  const { presupuesto, gastoItem, total } = useContext(PresupuestoContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Presupuesto</th>
          <th>Gastos</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{presupuesto}</td>
          <td>
            {gastoItem.reduce(
              (acumulador, gasto) => acumulador + (parseInt(gasto.valor)),
              0
            )}
          </td>
          <td>{total*1}</td>
        </tr>
      </tbody>
    </table>
  );
}
