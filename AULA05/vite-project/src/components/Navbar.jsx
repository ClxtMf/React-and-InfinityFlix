import './App.css'
import Carros from './components/Carros'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import das paginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {
  // BrowserRouter, Routes, Route, Link, Navigate, useParams
  // BrowserRouter = area do site onde as rotas irão acontecer
  // Routes = Area onde eu insiro as rotas
  // Route = A rota

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App