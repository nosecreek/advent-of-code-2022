const fs = require('fs')

const day10a = () => {
  const input = fs.readFileSync('./inputs/day10.txt', 'utf8')

  const instructions = input.split(/\n/)
  let cycle = 1
  let x = 1
  let sum = 0

  const checkStrength = () => {
    if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
      sum += cycle * x
    }
  }

  instructions.forEach((instruction) => {
    if (instruction === 'noop') {
      checkStrength()
      cycle++
    } else {
      checkStrength()
      cycle++
      checkStrength()
      cycle++
      x += parseInt(instruction.split(' ')[1])
    }
  })

  return sum
}

module.exports = day10a
