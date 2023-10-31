import CurrentRide from "../components/CurrentRide"
import ScrollList from "../components/ScrollList"

import { rides } from "../data.ts"

const Home = () => {
  return (
    <div className="home">
      <CurrentRide rides={rides} />
      <div>All planned rides: {rides.length}</div>
      <ScrollList rides={rides} />
    </div>
  )
}

export default Home