import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Result from './pages/Result/Result'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
