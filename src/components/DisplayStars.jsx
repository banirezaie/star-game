import { range } from "lodash"
import { GrStar } from "react-icons/gr"

export const DisplayStars = props => {
  console.log(props.stars)
  return range(0, props.stars).map(starId => (
    <GrStar key={starId} className='stars' />
  ))
}
