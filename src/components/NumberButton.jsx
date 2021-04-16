import { useState } from "react"
import "./components.css"

export const NumberButton = props => {
  const [colourStatus, setColourStatus] = useState(props.colourStatus)
  const handleClick = e => {
    return console.log(e.target.value)
  }
  return (
    <button
      value={props.number}
      className='buttons'
      onClick={handleClick}
      style={{ backgroundColor: colourStatus }}
    >
      {props.number}
    </button>
  )
}
