import { useContext } from "react";
import { PresupuestoContext } from "./ContextPresupuestoApp";
export function Gastos() {
  const { gastoItem, borrar } = useContext(PresupuestoContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Gasto</th>
          <th>Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {gastoItem.map((gasto, index) => (
          <tr key={index}>
            <td>{gasto.name}</td>
            <td>{gasto.valor}</td>
            <td>
              <button onClick={()=>borrar(index)}> Borrar dinamico</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
