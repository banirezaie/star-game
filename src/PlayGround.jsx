import { useState } from "react"
import { random, range, sum } from "lodash"
import { NumberButton, DisplayStars, RandomSumIn } from "./components/index"
import { Col, Container, Row } from "react-bootstrap"
import "./components/components.css"
import color from "./colors.json"

export const PlayGround = () => {
  const [stars, setStars] = useState(random(1, 9))
  const [availableNums, setAvailableNums] = useState(range(1, 10))
  const [candidateNums, setCandidateNums] = useState([])
  const isCandidateWrong = sum(candidateNums) > stars
  console.log("sum of candiates is: ", sum(candidateNums))
  const colourStatus = num => {
    if (!availableNums.includes(num)) {
      return color.unavailable
    }
    if (candidateNums.includes(num)) {
      return isCandidateWrong ? color.wrong : color.candidate
    }
    return color.available
  }
  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === color.unavailable) {
      return
    }
    const newCandidateNums = candidateNums.concat(number)
    if (sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums)
    } else {
      const newAvailableNumbers = availableNums.filter(
        n => !newCandidateNums.includes(n)
      )
      setStars(RandomSumIn(newAvailableNumbers, 9))
      setAvailableNums(newAvailableNumbers)
      setCandidateNums([])
    }
  }

  return (
    <Container className='contain'>
      <Row>
        <Col>
          <DisplayStars stars={stars} />
        </Col>
        <Col>
          {range(1, 10).map(num => {
            return (
              <NumberButton
                colourStatus={colourStatus(num)}
                key={num}
                number={num}
                onClick={onNumberClick}
              />
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}
