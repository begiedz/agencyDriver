import { Route, Routes } from 'react-router-dom'
import './scss/main.scss'
import Navbar from './components/Navbar'

import TransportPlanning from './pages/TransportPlanning'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transportPlanning' element={<TransportPlanning />} />
      </Routes>
    </>
  )
}

export default App
