import React from "react";
import styles from "./Trivia.module.css";

function Trivia() {
  return (
    <div className={styles.trivia}>
      <div className={styles.question}>What's the best youtube channel? </div>
      <div className={styles.answers}>
      <div className={styles.answer}>Saechvo</div>
        <div className={styles.answer}>Octopus</div>
        <div className={styles.answer}>utdr</div>
        <div className={styles.answer}>Go lets play</div>
      </div>
    </div>
  );
}

export default Trivia;
