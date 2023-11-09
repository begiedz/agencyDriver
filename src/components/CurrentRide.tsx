
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
        <div className="infoWrapper">
          <p>Passengers: {rides[0].passengers.length}</p>
          <p>Departure: {rides[0].departure.date}{rides[0].departure.time}</p>
        </div>
      </a>
    </div>
  )
}

export default CurrentRide