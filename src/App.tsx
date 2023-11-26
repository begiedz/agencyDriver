import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Navbar from './components/Navbar'

import TransportPlanning from './components/TransportPlanning'
import Home from './pages/Home'
import RideStart from './pages/RideStart'
import RideInfo from './pages/RideInfo'

import { rides } from './data'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home rides={rides} RideInfo={RideInfo} />} />
        <Route path='/transportPlanning' element={<TransportPlanning rides={rides} />} />
        <Route path='/rideStart' element={<RideStart />} />
        <Route path='/rideInfo' element={<RideInfo />} />
      </Routes>
    </>
  )
}

export default App