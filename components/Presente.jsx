import styles from "../styles/Jogo.module.css";

export default function Porta() {
  return (
    <>
      <div className={styles.presente}>
        <div className={styles.presenteCima}>
          <div className={styles.presenteVermelho}></div>
          <div className={styles.presenteVerdeV}></div>
          <div className={styles.presenteVermelho}></div>
        </div>
        <div className={styles.presenteVerdeH}></div>
        <div className={styles.presenteCima}>
          <div className={styles.presenteVermelho}></div>
          <div className={styles.presenteVerdeV}></div>
          <div className={styles.presenteVermelho}></div>
        </div>
      </div>
    </>
  );
}
