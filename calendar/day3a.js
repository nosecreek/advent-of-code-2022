const fs = require('fs')

const day3a = () => {
  const input = fs.readFileSync('./inputs/day3.txt', 'utf8')

  const sacks = input.split(/\n/)
  return sacks.reduce((prev, sack) => {
    const a = sack.substring(0, sack.length / 2)
    const b = sack.substring(sack.length / 2)

    for (let j = 0; j < a.length; j++) {
      if (b.match(a[j])) {
        const error = a.charCodeAt(j)
        return prev + (error > 96 ? error - 96 : error - 38)
      }
    }
  }, 0)
}

module.exports = day3a
