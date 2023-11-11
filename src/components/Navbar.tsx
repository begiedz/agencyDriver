import { Link } from 'react-router-dom'

import { MdAccountCircle } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>Agency Driver</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/transportPlanning'>Transport Planning</Link></li>
        <li><Link to='/startRide'>Start a ride</Link></li>
      </ul>
      <div className='profile'><MdAccountCircle />Jan Nowak #11221</div>
      <button className='logout'>Logout</button>
      <button className='menu'><BiMenu /></button>
    </nav>
  )
}

export default Navbar