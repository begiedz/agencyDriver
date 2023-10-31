


const CurrentRide = (props: any) => {
  return (
    <div className="currentRide">
      <h2>Current Ride</h2>
      <a href="#">
        <h2>{props.rides[0].destinationName}</h2>
        <div className="carInfo">{props.rides[0].vehicle}</div>
        <div className="infoWrapper">
          <p>Passengers: {props.rides[0].passengers}</p>
          <p>Departure: {props.rides[0].departure}</p>
        </div>
      </a>
    </div>
  )
}

export default CurrentRide