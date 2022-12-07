const fs = require('fs')

const day6b = () => {
  const input = fs.readFileSync('./inputs/day6.txt', 'utf8')
  let br = false

  for (let i = 14; i < input.length; i++) {
    for (let j = i - 14; j < i; j++) {
      if (input.substring(j + 1, i).match(input[j])) {
        br = true
        break
      }
    }
    if (!br) return i
    br = false
  }
}

module.exports = day6b
