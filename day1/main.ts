import { readInput } from '../util'
const lines = readInput()

let data = lines.map((line) => parseInt(line))

data = data.reduce<number[]>((acc, _v, i) => {
  if (i > data.length - 3) {
    return acc
  }
  return [...acc, data[i] + data[i + 1] + data[i + 2]]
}, [])

const { answer } = data.reduce<{ last: number; answer: number }>(
  ({ last, answer }, v) => {
    if (v > last) {
      return { last: v, answer: answer + 1 }
    }
    return { last: v, answer }
  },
  { last: Number.MAX_SAFE_INTEGER, answer: 0 },
)

console.log(answer)
