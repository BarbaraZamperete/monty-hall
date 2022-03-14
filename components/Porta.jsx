import styles from "../styles/Jogo.module.css";
import Presente from "../components/Presente";
import { useState } from "react";

export default function Porta(props) {
  const [aberta, setAberta] = useState(props.aberta);
  const [selecionada, setSelecionada] = useState(false);

  function abrirPorta() {
    if (aberta){
      setAberta(false);
    }else{
      setAberta(true);
    }
    
  }
  function selecionarPorta() {
    if(selecionada){
      setSelecionada(false);
    }else{
      setSelecionada(true);
    }
    
  }

  function porta() {
    if (aberta) {
      if(props.premiada){
        return (
          <div
            className={styles.portaAberta}
            onClick={selecionarPorta}
          >
           { props.children}
          </div>
        );
      }else{
        return (
          <div
            className={styles.portaAberta}
            onClick={selecionarPorta}
          ></div>
        );
      }
      
    }else {
      return (
        <div className={selecionada ? styles.portaSelecionada : styles.porta} onClick={selecionarPorta}>
          <div className={styles.macaneta} onClick={abrirPorta}></div>
        </div>
      );
    }
  }
  return (
    <>
      {porta()}
    </>
  );
}
