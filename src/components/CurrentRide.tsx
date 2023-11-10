
const CurrentRide = ({ rides }: any) => {
  return (
    <div className="currentRide">
      <h2>Current Ride</h2>
      <a href="#">
        <h2>{rides[0].destination.name}</h2>

        <div className="carInfo">
          <span>{rides[0].vehicle.brand}</span>
          <span>{rides[0].vehicle.plate}</span>
        </div>

        <ul className="infoWrapper">
          <li>Departure: {rides[0].departure.date} {rides[0].departure.time}</li>
          <li>Passengers: {rides[0].passengers.length}</li>
        </ul>
      </a>
    </div>
  )
}

export default CurrentRide