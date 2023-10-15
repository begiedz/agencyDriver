import AllPlannedRides from "../components/AllPlannedRides"
import CurrentRide from "../components/CurrentRide"
import ScrollList from "../components/ScrollList"

const Home = () => {
  return (
    <div className="home">
      <CurrentRide />
      <AllPlannedRides />
      <ScrollList />
    </div>
  )
}

export default Home