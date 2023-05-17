import React from "react";
import { Questions } from "./QuestionsList";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setQuizState, setScore } from '../features/quizSlice';

function EndScreen() {

  const dispatch = useDispatch();
  const score = useSelector((state) => state.quiz.score);

  const restartQuiz = () => {
    dispatch(setScore(0));
    dispatch(setQuizState("menu"));
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