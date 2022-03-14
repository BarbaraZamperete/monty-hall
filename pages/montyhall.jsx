import styles from "../styles/Jogo.module.css";
import Menu from "../components/Menu";
import Porta from "../components/Porta";
import Jogo from "../components/Jogo";

import { useState } from "react";

export default function montyHall() {
  const [portas, setPortas] = useState(0);
  const [presente, setPresente] = useState(0);
  const [inicio, setInicio] = useState(0);

  function guardarPortas(valor){
    setPortas(valor);
  }
  function guardarPresente(valor){
    setPresente(valor);
  }

  function Iniciar(v){
    if (v==1){
      setInicio(1);
    }else {
      setInicio(0);
    }
  }

  function jogo(){
    if (inicio){
      return (
        <Jogo qPortas={portas} lPresente={presente}></Jogo>
      );
    }else{
      return(
        <Menu
            funcaoPortas={guardarPortas}
            funcaoPresente={guardarPresente}
            funcaoIniciar={Iniciar}
          ></Menu>
      )
    }
    
  }

  return (
    <div className={styles.containerBig}>
      {jogo()}
      <button className={styles.reiniciar} onClick={()=>Iniciar(0)}>Reiniciar</button>
      
    </div>
  );
}
