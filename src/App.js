import React, { useState } from "react";
import "./styles.css";

import Entrada from "./components/entrada";
import Fim from "./components/fim";

export default function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setNumPalpites(1);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "ENTRADA") return <Entrada iniciar={iniciarJogo} />;

  if (estado === "FIM")
    return (
      <Fim palpite={palpite} numPalpites={numPalpites} iniciar={iniciarJogo} />
    );

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <p>
        Min:{min} Max:{max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
