import fs from 'fs'
export function readInput(): string[] {
  return fs
    .readFileSync('input.txt', { encoding: 'utf8' })
    .split('\n')
    .slice(0, -1) // newline at end of file
}
