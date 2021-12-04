import { readInput } from '../util'

const lines = readInput()

const { h, v } = lines.reduce<{ h: number; v: number; aim: number }>(
  (acc, line) => {
    const [dir, numstr] = line.split(' ')
    const num = parseInt(numstr)
    switch (dir) {
      case 'down':
        return { ...acc, aim: acc.aim + num }
      case 'up':
        return { ...acc, aim: acc.aim - num }
    }
    return { ...acc, h: acc.h + num, v: acc.v + acc.aim * num }
  },
  { h: 0, v: 0, aim: 0 },
)

console.log(h * v)
