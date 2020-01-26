import React, { useState } from "react";
import "./styles.css";

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
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>jogar novamente</button>;
  }
  if (estado === "FIM") {
    return (
      <>
        <p>
          Acertei o número {palpite} com {numPalpites} chute!
        </p>
        <button onClick={iniciarJogo}>Jogar novamente</button>
      </>
    );
  }
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
