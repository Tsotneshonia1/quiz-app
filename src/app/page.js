"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Trivia from "@/components/Trivia";

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: "ვინ არის საუკეთესო იუთუბერი",
      answers: [
        {
          text: "საეჭვო",
          correct: false,
        },
        {
          text: "უტდრ",
          correct: true,
        },
        {
          text: "თემურა",
          correct: false,
        },
        {
          text: "akeba",
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: "ვინ არის საუკეთესო bodibilder",
      answers: [
        {
          text: "Tazo",
          correct: false,
        },
        {
          text: "me",
          correct: true,
        },
        {
          text: "sergo",
          correct: false,
        },
        {
          text: "miqa",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 400" },
    { id: 5, amount: "$ 500" },
    { id: 6, amount: "$ 600" },
    { id: 7, amount: "$ 700" },
    { id: 8, amount: "$ 800" },
    { id: 9, amount: "$ 900" },
    { id: 10, amount: "$ 1000" },
    { id: 11, amount: "$ 1100" },
    { id: 12, amount: "$ 1200" },
    { id: 13, amount: "$ 1300" },
    { id: 14, amount: "$ 1400" },
    { id: 15, amount: "$ 1500" },
  ].reverse();

  return (
    <main className={styles.app}>
      <h1> Quiz App </h1>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.timer}>30</div>
        </div>
        <div className={styles.bottom}>
          <Trivia data={data} 
           setTimeOut={setTimeOut}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}
            />
        </div>
      </div>
      <div className={styles.pyramid}>
        <ul className={styles.moneyList}>
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className={styles.moneyListItemNumber}>{m.id}</span>
              <span className={styles.moneyListItemAmount}>{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
