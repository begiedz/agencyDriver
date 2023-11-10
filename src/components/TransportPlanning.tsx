const TransportPlanning = ({ rides }: any, index: number) => {
  return (<div className="transportPlanning">
    <h2>TransportPlanning</h2>
    <ul key={index} className="plannedRidesWrapper">
      {rides.map((ride: any) => {
        return (
          <li className="plannedRide">
            <p>From: {ride.startLocation.name}</p>
            <p>To: {ride.destination.name}</p>
            <p>Passengers: {ride.passengers.length}</p>
            <p>Distance: {ride.distance}km</p>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default TransportPlanning