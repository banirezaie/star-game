import "./components.css"

export const GameTimer = ({ secondsLeft }) => {
  return (
    <div className='timer'>
      <p>
        Time Remaining: <b>{secondsLeft}</b>
      </p>
    </div>
  )
}
