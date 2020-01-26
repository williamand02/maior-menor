import React from "react";

const Fim = ({ palpite, numPalpites, iniciar }) => {
  return (
    <>
      <p>
        Acertei o número {palpite} com {numPalpites} chute!
      </p>
      <button onClick={iniciar}>Jogar novamente</button>
    </>
  );
};

export default Fim;
