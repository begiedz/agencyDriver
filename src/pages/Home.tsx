import CurrentRide from "../components/CurrentRide"
import ScrollList from "../components/ScrollList"

import { rides } from "../data.ts"

const Home = () => {
  return (
    <main className="home">
      <CurrentRide rides={rides} />
      <div>All planned rides: {rides.length}</div>
      <ScrollList rides={rides} />
    </main>
  )
}

export default Home