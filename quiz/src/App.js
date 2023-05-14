import './App.css';
import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Context/Context';


function App() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>Вікторина</h1>
      <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }}>
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "endSreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}
export default App;