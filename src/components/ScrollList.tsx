const ScrollList = (props: any) => {
  return (
    <section className="scrollListWrapper">
      <ul className="scrollList">
        {props.rides.slice(1).map((ride: any, index: number) => {
          return (
            <li key={index}>
              <a href="#">
                <p>{ride.destination.name}</p>
                <p>{ride.vehicle.brand}</p>
                <p>{ride.vehicle.plate}</p>
                <p>{ride.departure.date}</p>
                <p>{ride.departure.time}</p>
                <p>{ride.passengers.length} Passengers</p>
              </a>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default ScrollList