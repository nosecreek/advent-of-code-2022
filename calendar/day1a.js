const fs = require('fs')

const day1a = () => {
  const input = fs.readFileSync('./inputs/day1.txt', 'utf8')

  const elves = input.split(/\n\n/)
  const totals = elves.map((elf) =>
    elf.split(/\n/).reduce((a, b) => a + parseInt(b), 0)
  )
  return Math.max(...totals)
}

module.exports = day1a
