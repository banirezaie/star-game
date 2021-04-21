import { useState } from "react"
import { PlayGround } from "./components"

const App = () => {
  const [gameId, setGameId] = useState(1)
  return <PlayGround key={gameId} startNewGame={()=> setGameId(gameId + 1) } />
}

export default App
