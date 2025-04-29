import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Articles from './components/Articles'
import About from './components/About'
import './App.css'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/articles" >Artigos</Link>
        <Link to="/about">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
