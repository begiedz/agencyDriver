import TotalPlannedRides from "../components/TotalPlannedRides"
import CurrentRides from "../components/CurrentRides"

const Home = () => {
  return (
    <div>
      <CurrentRides />
      <TotalPlannedRides />
    </div>
  )
}

export default Home