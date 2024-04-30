import React, { useEffect, useState } from "react";
import styles from "./Trivia.module.css";

function Trivia({ data, setTimeout, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[[questionNumber - 1]]);
  }, [data, questionNumber]);

  return (
    <div className={styles.trivia}>
      <div className={styles.question}>{question?.question} </div>
      <div className={styles.answers}>
       {question?.answers.map((a) =>( 
        <div className={styles.answer}>{a.text}</div>
     ))}
      </div>
    </div>
  );
}

export default Trivia;
