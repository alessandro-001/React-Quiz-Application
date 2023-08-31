import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import axios from 'axios';
import Leaderboard from './pages/Leaderboard/Leaderboard';

function App() {
  const [theme, setTheme] = useState(null);
  const [username, setUserName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  console.log("name>>", username);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  function handleThemeSwitch() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

 
  return (
    <>
      <button type="button" onClick={handleThemeSwitch}>
        {theme === 'dark' ? '🌜' : '🌞'}
      </button>
      <BrowserRouter>
        <div className={`app ${theme}`}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  username={username}
                  setUserName={setUserName}
                  fetchQuestions={fetchQuestions}
                  category={category}
                  setCategory={setCategory}
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  username={username}
                  questions={questions}
                  setScore={setScore}
                  score={score}
                  setQuestions={setQuestions}
                  theme={theme}
                />
              }
            />
            <Route 
              path="/result" 
              element={
                <Result 
                  score={score} 
                  username={username} 
                  category={category}
                  difficulty={difficulty}
                />} />
            <Route 
              path="/leaderboard" 
              element={
                <Leaderboard 
                  username={username}  
                  category={category}
                  difficulty={difficulty}
                  score={score}
                />
              } 
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

