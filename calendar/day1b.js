const fs = require('fs')

const day1b = () => {
  const input = fs.readFileSync('./inputs/day1.txt', 'utf8')

  const elves = input.split(/\n\n/)
  const totals = elves
    .map((elf) => elf.split(/\n/).reduce((a, b) => a + parseInt(b), 0))
    .sort((a, b) => b - a)
  return totals[0] + totals[1] + totals[2]
}

module.exports = day1b
