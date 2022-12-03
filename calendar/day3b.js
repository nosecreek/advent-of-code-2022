const fs = require('fs')

const day3b = () => {
  const input = fs.readFileSync('./inputs/day3.txt', 'utf8')

  const sacks = input.split(/\n/)
  let priority = 0
  for (let i = 0; i < sacks.length; i += 3) {
    for (let j = 0; j < sacks[i].length; j++) {
      if (sacks[i + 1].match(sacks[i][j]) && sacks[i + 2].match(sacks[i][j])) {
        const badge = sacks[i].charCodeAt(j)
        priority += badge > 96 ? badge - 96 : badge - 38
        break
      }
    }
  }
  return priority
}

module.exports = day3b
