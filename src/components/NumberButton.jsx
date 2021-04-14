import { range } from "lodash"
import "./components.css"

export const NumberButton = () => {
  const handleClick = e => {
    return console.log(e.target.value)
  }
  console.log(range(1, 10))

  return (
    range(1, 10).map(num => (
      <button
        key={num}
        value={num}
        className='buttons'
        onClick={handleClick}
        style={{ backgroundColor: "grey" }}
      >
        {num}
      </button>
    ))
  )
}
