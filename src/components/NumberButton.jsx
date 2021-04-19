import "./components.css"

export const NumberButton = props => {
  const handleClick = e => {
    return props.onClick((e.target.value, props.colourStatus))
  }
  return (
    <button
      value={props.number}
      className='buttons'
      onClick={handleClick}
      style={{ backgroundColor: props.colourStatus }}
    >
      {props.number}
    </button>
  )
}
