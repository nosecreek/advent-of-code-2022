const fs = require('fs')

const day11b = () => {
  const input = fs.readFileSync('./inputs/day11.txt', 'utf8')

  const monkeyInstructions = input.split(/\n\n/).map((m) => m.split(/\n/))
  const monkeys = monkeyInstructions.map((m) =>
    m[1]
      .split(': ')[1]
      .split(', ')
      .map((item) => parseInt(item))
  )

  const multiplier = monkeyInstructions.reduce(
    (a, b) => a * b[3].match(/\d+/)[0],
    1
  )

  const counts = new Array(monkeys.length).fill(0)

  for (let i = 0; i < 10000; i++) {
    monkeyInstructions.forEach((m, j) => {
      monkeys[j].forEach((item) => {
        const oppValue = parseInt(m[2].match(/\d+/)?.[0]) || item
        let newValue = m[2].match(/[*]/)?.[0]
          ? item * oppValue
          : item + oppValue
        newValue %= multiplier

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

module.exports = day11b
