const TransportPlanning = ({ rides }: any) => {
  return (<div>
    <h2>TransportPlanning</h2>
    <ul className="plannedRidesWrapper">
      {rides.map((ride: any) => {
        return (
          <li className="plannedRide">
            <p>From: {ride.startLocationName}</p>
            <p>To: {ride.destinationName}</p>
            <p>Passengers: {ride.passengers}</p>
            <p>Distance: {ride.distance}</p>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default TransportPlanning