import { createContext, useState } from "react";
export const PresupuestoContext = createContext();
export function PresupuestoContextProvider(props) {
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoInicial, setPresupuestoInicial] = useState("");
  const [gastoName, setGastoName] = useState("");
  const [gastoValueInicial, setGastoValueInicial] = useState("");
  const [gastoItem, setGastoItem] = useState([]);

  const total =
    presupuesto -
    gastoItem.reduce((acumulador, gasto) => acumulador + gasto.valor, 0);

  const capturarPresupuesto = () => {
    debugger
    presupuestoInicial !== "" ? setPresupuesto(parseInt(presupuestoInicial)) : error();
    setPresupuestoInicial("");
  };
  const error = () => {
    setTimeout(() => {
      alert("Ingrese un presupuesto");
      setPresupuestoInicial("");
    }, 100);
  };
  const capturarGasto = () => {
    gastoValueInicial === ""
      ? alert("ingrese el valor del gasto")
      : setGastoItem([
          ...gastoItem,
          { name: gastoName, valor: parseInt(gastoValueInicial) },
        ]);
    setGastoValueInicial("");
    setGastoName("");
  };
  const handlerPresupuesto = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setPresupuestoInicial(result);
  };
  const handlerGastoValue = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setGastoValueInicial(result);
  };

  const handlerGastoName = (e) => {
    setGastoName(e.target.value);
  };
  const borrar = (index) => {
    setGastoItem(gastoItem.filter((gasto) => gasto !== gastoItem[index]));
  };

  return (
    <PresupuestoContext.Provider
      value={{
        presupuesto,
        gastoName,
        gastoValueInicial,
        capturarPresupuesto,
        presupuestoInicial,
        handlerPresupuesto,

        handlerGastoName,
        handlerGastoValue,
        capturarGasto,
        gastoItem,
        borrar,
        total,
      }}
    >
      {props.children}
    </PresupuestoContext.Provider>
  );
}
