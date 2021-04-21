import { range, sum } from "lodash"
import {
  NumberButton,
  DisplayStars,
  PlayAgain,
  GameTimer,
  useGameState,
} from "./components/index"
import { Col, Container, Row } from "react-bootstrap"
import "./components/components.css"
import color from "./colors.json"

export const PlayGround = props => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState();

  const gameStatus =
    availableNums.length === 0 ? "Won" : secondsLeft === 0 ? "lost" : "active"

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
    if (gameStatus !== "active" || currentStatus === color.unavailable) {
      return
    }
    const newCandidateNums =
      currentStatus === color.available
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number)
  
    setGameState(newCandidateNums);
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
