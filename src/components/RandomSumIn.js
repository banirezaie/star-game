import { random, sum } from "lodash"

export const RandomSumIn = (arr, max) => {
  const sets = [[]]
  const sums = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < sets.length; j++) {
      const candidateSet = sets[j].concat(arr[i])
      const candidateSum = sum(candidateSet)
      if (candidateSum <= max) {
        sets.push(candidateSet)
        sums.push(candidateSum)
      }
    }
  }
  return sums[random(0, sums.length - 1)]
}
