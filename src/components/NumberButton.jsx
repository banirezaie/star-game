import { range } from "lodash"
import "./components.css"

export const NumberButton = ({ value, type }) => {
  const handleClick = e => {
    // e.preventDefault();
    console.log(e.target.value)
  }
  console.log(range(1,10))

  return (
    //  {range(1, 10).map(num => (
    // <button
    //   onClick={handleClick}
    //   type={type}
    //   style={{ backgroundColor: "grey" }}
    //   className='buttons'
    //   // value={num} key={num}
    // >
    //   {value}
    //    </button>
      //  ))}
    
    range(1, 10).map(num => <button key={num} value={num} className='buttons' onclick={handleClick} >{ num }</button>)
  )
}
