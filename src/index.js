import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Saldo } from "./Saldo";
import { Gastos } from "./Gastos";
import { InputPresupuesto } from "./IngresarPresupuesto";
import { IngresarGasto } from "./IngresarGasto";
import { PresupuestoContextProvider } from "./ContextPresupuestoApp";
import {Fecha} from './Nav'
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PresupuestoContextProvider>
      <Fecha/>
      <InputPresupuesto />
      <IngresarGasto />
      <Saldo />
      <Gastos />
    </PresupuestoContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
