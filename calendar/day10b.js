const fs = require('fs')

const day10b = () => {
  const input = fs.readFileSync('./inputs/day10.txt', 'utf8')

  const instructions = input.split(/\n/)
  let cycle = 1
  let sprite = 1

  const display = new Array(6).fill(null).map(() => new Array(40).fill(' '))

  const update = () => {
    const x = (cycle - 1) % 40

    if ([sprite - 1, sprite, sprite + 1].includes(x)) {
      const y = Math.floor((cycle - 1) / 40)
      display[y][x] = '#'
    }
  }

  instructions.forEach((instruction) => {
    if (instruction === 'noop') {
      update()
      cycle++
    } else {
      update()
      cycle++
      update()
      cycle++
      sprite += parseInt(instruction.split(' ')[1])
    }
  })

  display.forEach((row) => {
    console.log(row.join(''))
  })
  return ''
}

module.exports = day10b
