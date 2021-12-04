import fs from 'fs'

const lines = fs
  .readFileSync('input.txt', { encoding: 'utf8' })
  .split('\n')
  .slice(0, -1) // newline at end of file

let data = lines.map((line) => parseInt(line))

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
