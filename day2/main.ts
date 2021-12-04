import { readInput } from '../util'

const lines = readInput()

const { h, v } = lines.reduce<{ h: number; v: number }>(
  (acc, line) => {
    let dh = 0
    let dv = 0
    const [dir, numstr] = line.split(' ')
    const num = parseInt(numstr)
    switch (dir) {
      case 'forward':
        dh = num
        break
      case 'down':
        dv = num
        break
      case 'up':
        dv = -num
        break
    }
    return { h: acc.h + dh, v: acc.v + dv }
  },
  { h: 0, v: 0 },
)

console.log(h * v)
