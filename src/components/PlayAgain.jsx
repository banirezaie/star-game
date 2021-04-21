import "./components.css"

export const PlayAgain = props => (
  <>
    <button onClick={props.onClick} className='restart'>
      Restart The Game
    </button>
    <div
      style={{
        color: props.gameStatus === "lost" ? "darkRed" : "green",
        fontSize: "2rem",
      }}
    >
      {props.gameStatus === "lost" ? "Game Over" : "You Won"}
    </div>
  </>
)
