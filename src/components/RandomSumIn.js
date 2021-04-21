import { random, sum } from "lodash"

export const RandomSumIn = (arr, max) => {
  const sets = [[]]
  const sums = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const candidateSet = sets[j].concat(arr[i])
      const candidateSum = sum(candidateSet)
      if (candidateSum <= max) {
        sets.push(candidateSet)
        sums.push(candidateSum)
      }
    }
  }
  const unique = [...new Set(sums)]
  console.log("unique numbers should be: ", unique)
  return unique[random(unique.length - 1)]
}


