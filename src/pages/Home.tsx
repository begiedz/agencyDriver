import AllPlannedRides from "../components/AllPlannedRides"
import CurrentRide from "../components/CurrentRide"

const Home = () => {
  return (
    <div>
      <CurrentRide />
      <AllPlannedRides />
    </div>
  )
}

export default Home