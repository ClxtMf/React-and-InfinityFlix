import './App.css' 
import {BrowserRouter, Routes, Route} from  'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
function App() {
  

  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App