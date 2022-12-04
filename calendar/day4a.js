const fs = require('fs')

const day4a = () => {
  const input = fs.readFileSync('./inputs/day4.txt', 'utf8')

  const pairs = input.split(/\n/)
  return pairs.reduce((prev, pair) => {
    const elves = pair
      .split(',')
      .map((elf) => elf.split('-').map((x) => parseInt(x)))
    if (
      (elves[0][0] >= elves[1][0] && elves[0][1] <= elves[1][1]) ||
      (elves[1][0] >= elves[0][0] && elves[1][1] <= elves[0][1])
    ) {
      return prev + 1
    }
    return prev
  }, 0)
}

module.exports = day4a
