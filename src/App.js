import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Articles from './components/Articles'
import About from './components/About'

export default function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/articles" style={{ marginRight: '1rem' }}>Artigos</Link>
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
