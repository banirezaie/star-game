import { useState, useEffect } from "react"
import { random, range, sum } from "lodash"
import {
  NumberButton,
  DisplayStars,
  RandomSumIn,
  PlayAgain,
  GameTimer,
} from "./components/index"
import { Col, Container, Row } from "react-bootstrap"
import "./components/components.css"
import color from "./colors.json"

export const PlayGround = (props) => {
  const [stars, setStars] = useState(random(1, 9))
  const [availableNums, setAvailableNums] = useState(range(1, 10))
  const [candidateNums, setCandidateNums] = useState([])
  const [secondsLeft, setSecondsLeft] = useState(10)
  //setInterval, setTimeout
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    }
  })

  const gameStatus = availableNums.length === 0 ? 'Won' : secondsLeft === 0 ? 'lost' : 'active'

  const isCandidateWrong = sum(candidateNums) > stars
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
    if ( gameStatus !== 'active' || currentStatus === color.unavailable) {
      return
    }
    const newCandidateNums =
      currentStatus === color.available
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number)
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
    <>
      <Container className='contain'>
        <Row>
          <Col>
            {gameStatus !== "active" ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
            ) : (
              <DisplayStars stars={stars} />
            )}
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
      <Container>
        <Row>
          <Col>
            <GameTimer secondsLeft={secondsLeft} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
