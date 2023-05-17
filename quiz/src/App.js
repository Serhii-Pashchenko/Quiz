import './App.css';
import React from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { useSelector } from 'react-redux';

function App() {

  const quizState = useSelector((state) => state.quiz.quizState);

  return (
    <div className='App'>
      <h1>Вікторина</h1>
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "endSreen" && <EndScreen />}
    </div>
  );
}
export default App;