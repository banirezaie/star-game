import { range } from "lodash"
import { GrStar } from "react-icons/gr"

export const DisplayStars = props => {
  return range(1, props.stars).map(starId => (
    <GrStar key={starId} className='stars' />
  ))
}
