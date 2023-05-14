import React, { useState, useContext } from "react";
import { QuizContext } from "../Context/Context";
import { Questions } from "./QuestionsList";

function Quiz() {

  const {score, setScore, setQuizState} = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    const optionsButton = document.querySelectorAll(".options button");
    optionsButton.forEach((button) => {
      button.style.backgroundColor = "buttonface";
    })
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  }

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("endSreen");
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].questionText}</h1>
      <div className="options">
        <button onClick={(e) => { setOptionChosen("A"); e.target.style.backgroundColor = "aquamarine" }}> {Questions[currQuestion].optionA} </button>
        <button onClick={(e) => { setOptionChosen("B"); e.target.style.backgroundColor = "aquamarine" }}> {Questions[currQuestion].optionB} </button>
        <button onClick={(e) => { setOptionChosen("C"); e.target.style.backgroundColor = "aquamarine" }}> {Questions[currQuestion].optionC} </button>
        <button onClick={(e) => { setOptionChosen("D"); e.target.style.backgroundColor = "aquamarine" }}> {Questions[currQuestion].optionD} </button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}> Завершити </button>
      ) : (
        <button onClick={nextQuestion}> Наступне запитання </button>
      )}
    </div>
  )
}

export default Quiz;