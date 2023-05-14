import React, { useContext } from "react";
import { QuizContext } from "../Context/Context";
import "../App.css";

export default function MainMenu() {
  const { quizState, setQuizState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button onClick={() => setQuizState("quiz")}>Почати</button>
    </div>
  )
}