import { useState, useEffect } from "react"
import { random, sum, range } from "lodash"
import { RandomSumIn } from "./RandomSumIn"

export const useGameState = () => {
  const [stars, setStars] = useState(random(1, 9))
  const [availableNums, setAvailableNums] = useState(range(1, 10))
  const [candidateNums, setCandidateNums] = useState([])
  const [secondsLeft, setSecondsLeft] = useState(10)

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    }
  })

  const setGameState = newCandidateNums => {
    if (sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums)
    } else {
      const newAvailableNumbers = availableNums.filter(
        n => !newCandidateNums.includes(n)
      )
      setStars(RandomSumIn(newAvailableNumbers, 9))
      setAvailableNums(newAvailableNumbers)
      setCandidateNums([])
    }
  }
  return { stars, availableNums, candidateNums, secondsLeft, setGameState }
}
