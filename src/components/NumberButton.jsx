import "./components.css"

export const NumberButton = props => {
  return (
    <button
      value={props.number}
      className='buttons'
      onClick={() => props.onClick(props.number, props.colourStatus)}
      style={{ backgroundColor: props.colourStatus }}
    >
      {props.number}
    </button>
  )
}
