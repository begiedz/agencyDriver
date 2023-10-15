import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>Agency Driver</div>
      <Link to="/">Home</Link>
      <Link to='/transportPlanning'>Transport Planning</Link>
      <Link to='/startRide'>Start a ride</Link>
    </nav>
  )
}

export default Navbar