import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Result/Result'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('');

  return (
    <>
      <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
