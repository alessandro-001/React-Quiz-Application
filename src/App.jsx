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
//import useMediaQuery from './components/Mediaquery';

function App() {
  const [theme, setTheme] = useState(null);
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  // const isDesktop = useMediaQuery('(min-width: 960px)');

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

  // function sreenSize(isDesktop) {
  //   if (!isDesktop) { // If media query matches
  //     document.body.style.backgroundColor = "yellow";
  //   } else {
  //     document.body.style.backgroundColor = "pink";
  //   }
  // }
  
  

  return (
    <>
      <button type="button" onClick={handleThemeSwitch}>
        {theme === 'dark' ? '🌜' : '🌞'}
      </button>
      <BrowserRouter>
        <div className={`app ${theme}`}>
        {/* {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>} */}
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  setScore={setScore}
                  score={score}
                  setQuestions={setQuestions}
                  theme={theme}
                />
              }
            />
            <Route path="/result" element={<Result score={score} name={name} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

