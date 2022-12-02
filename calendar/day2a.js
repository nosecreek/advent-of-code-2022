const fs = require('fs')

const day2a = () => {
  const input = fs.readFileSync('./inputs/day2.txt', 'utf8')

  const guide = input.split(/\n/)
  const scores = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 }
  return guide.reduce((a, round) => {
    const [opp, move] = round.split(' ')
    return (
      a +
      scores[move] +
      (scores[opp] < scores[move]
        ? opp === 'A' && move === 'Z'
          ? 0
          : 6
        : scores[opp] === scores[move]
        ? 3
        : opp === 'C' && move === 'X'
        ? 6
        : 0)
    )
  }, 0)
}

module.exports = day2a
