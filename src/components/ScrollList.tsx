const ScrollList = (props: any) => {
  return (
    <div className="scrollListWrapper">
      <ul className="scrollList">
        {props.rides.slice(1).map((ride: any) => {
          return (
            <li>
              <a href="#">
                <p>{ride.destinationName}</p>
                <p>{ride.vehicle}</p>
                <p>{ride.departure}</p>
                <p>{ride.passengers}</p>
              </a>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default ScrollList