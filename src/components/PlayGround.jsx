import { useState } from "react";
import { random, range, sum } from "lodash"
import { NumberButton } from "./NumberButton";
import { DisplayStars } from "./DisplayStars"
import { Col, Container, Row } from "react-bootstrap";
import "./components.css"
import color from "../colors.json"

export const PlayGround = () => {
  const [stars, setStars] = useState(random(1, 9))
  const [availableNums, setAvailableNums] = useState(range(1, 10))
  const [candidateNums, setCandidateNums] = useState([])

  const isCandidateWrong = sum(candidateNums) > stars
  console.log("sum of candiates is: ", sum(candidateNums))

  const handleColour = num => {
    if (!availableNums.includes(num)) {
      return color.unavailable
    }
    if (candidateNums.includes(num)) {
      return isCandidateWrong ? color.wrong : color.candidate
    }
    return color.available
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
                colourStatus={handleColour(num)}
                key={num}
                number={num}
              />
            )
          })}
        </Col>
      </Row>
    </Container>
  )
};
