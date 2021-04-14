import { useState } from "react";
import { range, random } from "lodash";
import { NumberButton } from "./NumberButton";
import { GrStar } from "react-icons/gr";
import "./components.css";
import { Col, Container, Row } from "react-bootstrap";
// import color from "../colors.json"

export const PlayGround = () => {
  const [stars, setStars] = useState(random(1, 10))
  // const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5])
  // const [candidateNums, setCandidateNums] = useState([2, 3])
  // candidate numbers
  // available numbers
  return (
    <Container className='contain'>
      <Row>
        <Col>
          {range(1, stars).map(starId => (
            <GrStar key={starId} className='stars' />
          ))}
        </Col>
        <Col>
            <NumberButton   />
        </Col>
      </Row>
    </Container>
  )
};
