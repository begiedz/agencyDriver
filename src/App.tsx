import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Navbar from './components/Navbar'

import TransportPlanning from './components/TransportPlanning'
import Home from './pages/Home'
import { rides } from './data'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transportPlanning' element={<TransportPlanning rides={rides} />} />
      </Routes>
    </>
  )
}

export default App
