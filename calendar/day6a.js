const fs = require('fs')

const day6a = () => {
  const input = fs.readFileSync('./inputs/day6.txt', 'utf8')

  for (let i = 3; i < input.length; i++) {
    if (
      input[i] !== input[i - 1] &&
      input[i] !== input[i - 2] &&
      input[i] !== input[i - 3] &&
      input[i - 1] !== input[i - 2] &&
      input[i - 1] !== input[i - 3] &&
      input[i - 2] !== input[i - 3]
    ) {
      return i + 1
    }
  }
}

module.exports = day6a
