import { useState } from "react";
import styles from "../styles/Jogo.module.css";

export default function Menu({ funcaoPortas, funcaoIniciar, funcaoPresente }) {
  const [portas, setPortas] = useState(0);
  const [presente, setPresente] = useState(0);

  function diminuirP() {
    if (portas > 0) {
      setPortas(portas - 1);
    }
    return;
  }
  function aumentarP() {
    setPortas(portas + 1);
    return;
  }
  function diminuirL() {
    if (presente > 0) {
      setPresente(presente - 1);
    }
    return;
  }
  function aumentarL() {
    if (presente < portas) {
      setPresente(presente + 1);
    }
    return;
  }
  return (
    <div className={styles.containerMenu}>
      <div className={styles.title}>Monty Hall</div>
      <div className={styles.contador}>
        <h4>Quantas portas?</h4>
        <h1>{portas}</h1>
        <div className={styles.buttonContainer}>
          <button onClick={diminuirP}>-</button>
          <button onClick={aumentarP}>+</button>
        </div>
      </div>
      <div className={styles.contador}>
        <h4>Porta com o presente?</h4>
        <h1>{presente}</h1>
        <div className={styles.buttonContainer}>
          <button onClick={diminuirL}>-</button>
          <button onClick={aumentarL}>+</button>
        </div>
      </div>
      <div
        className={styles.iniciar}
        onClick={() => {
          funcaoPortas(portas);
          funcaoPresente(presente);
          funcaoIniciar(1);
        }}
      >
        Iniciar
      </div>
    </div>
  );
}
