import { readInput } from '../util'

const lines = readInput()

const hist: number[] = []

lines.forEach((line) => {
  line.split('').forEach((bit, i) => {
    hist[i] = (hist[i] ?? 0) + parseInt(bit)
  })
})

const gamma = hist.map((v) => (v > lines.length / 2 ? 1 : 0))
const episilon = gamma.map((v) => (v + 1) % 2)

function btoi(b: number[]) {
  return parseInt(b.join(''), 2)
}

const answer = btoi(gamma) * btoi(episilon)
console.log(answer)
