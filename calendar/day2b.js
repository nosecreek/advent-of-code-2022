const fs = require('fs')

const day2b = () => {
  const input = fs.readFileSync('./inputs/day2.txt', 'utf8')

  const guide = input.split(/\n/)
  const scores = {
    A: { score: 1, win: 'B', lose: 'C', draw: 'A' },
    B: { score: 2, win: 'C', lose: 'A', draw: 'B' },
    C: { score: 3, win: 'A', lose: 'B', draw: 'C' }
  }
  const results = {
    X: { name: 'lose', score: 0 },
    Y: { name: 'draw', score: 3 },
    Z: { name: 'win', score: 6 }
  }
  return guide.reduce((a, round) => {
    const [opp, result] = round.split(' ')
    return (
      a +
      scores[scores[opp][results[result].name]].score +
      results[result].score
    )
  }, 0)
}

module.exports = day2b
