import { useState } from "react";
import { range, random } from "lodash";
import { NumberButton } from "./NumberButton";
import { GrStar } from "react-icons/gr";
import "./components.css";
import { Col, Container, Row } from "react-bootstrap";

export const PlayGround = () => {
  const [stars, setStars] = useState(random(1, 10));

  return (
    <Container className='contain'>
      <Row>
        <Col>
          {range(1, stars).map(starId => (
            <GrStar key={starId} className='stars' />
          ))}
        </Col>
        <Col>
          {range(1, 10).map(num => (
            <NumberButton value={num} key={num} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
