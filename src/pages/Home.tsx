import AllPlannedRides from "../components/AllPlannedRides"
import CurrentRide from "../components/CurrentRide"
import ScrollList from "../components/ScrollList"

import { rides } from "../data.ts"
const Home = () => {
  return (
    <div className="home">
      <CurrentRide rides={rides} />
      <AllPlannedRides />
      <ScrollList />
    </div>
  )
}

export default Home