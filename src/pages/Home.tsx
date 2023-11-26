import CurrentRide from "../components/CurrentRide"
import ScrollList from "../components/ScrollList"


const Home = ({ rides, RideInfo }: any) => {
  return (
    <main className="home">
      <CurrentRide rides={rides} />
      <div>All planned rides: {rides.length}</div>
      <ScrollList rides={rides} />
    </main>
  )
}

export default Home