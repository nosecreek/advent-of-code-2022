const fs = require('fs')

const day11a = () => {
  const input = fs.readFileSync('./inputs/day11.txt', 'utf8')

  const monkeyInstructions = input.split(/\n\n/).map((m) => m.split(/\n/))
  const monkeys = monkeyInstructions.map((m) =>
    m[1]
      .split(': ')[1]
      .split(', ')
      .map((item) => parseInt(item))
  )

  const counts = new Array(monkeys.length).fill(0)

  for (let i = 0; i < 20; i++) {
    monkeyInstructions.forEach((m, j) => {
      monkeys[j].forEach((item) => {
        const oppValue = parseInt(m[2].match(/\d+/)?.[0]) || item
        const newValue = m[2].match(/[*]/)?.[0]
          ? Math.floor((item * oppValue) / 3)
          : Math.floor((item + oppValue) / 3)
        const test = m[3].match(/\d+/)[0]
        if (newValue % test) {
          monkeys[m[5].match(/\d+/)[0]].push(newValue)
        } else {
          monkeys[m[4].match(/\d+/)[0]].push(newValue)
        }
        counts[j]++
      })
      monkeys[j] = []
    })
  }

  counts.sort((a, b) => b - a)
  return counts[0] * counts[1]
}

module.exports = day11a
