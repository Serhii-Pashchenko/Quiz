import React, { useContext} from "react";
import { QuizContext } from "../Context/Context";
import { Questions } from "./QuestionsList";
import "../App.css";

function EndScreen() {
  const { score, setScore, setQuizState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setQuizState("menu");
  }
  return (
    <div className="EndScreen">
      <h1> Вікторину завершено! </h1>
      <h3> Ваш результат: {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}> Пройти ще раз </button>
    </div>
  )
}

export default EndScreen;