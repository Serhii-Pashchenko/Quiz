import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { setQuizState } from '../features/quizSlice';

export default function MainMenu() {
  const dispatch = useDispatch();
  return (
    <div className="Menu">
      <button onClick={() => dispatch(setQuizState("quiz"))}>Почати</button>
    </div>
  )
}