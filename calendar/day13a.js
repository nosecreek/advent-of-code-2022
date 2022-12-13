const fs = require('fs')

const day13a = () => {
  const input = fs.readFileSync('./inputs/day13.txt', 'utf8')
  const pairs = input.split(/\n\n/)

  return pairs.reduce((prev, pair, i) => {
    const [a, b] = pair.split(/\n/).map((x) => JSON.parse(x))

    const compareNumber = (x, y) => {
      if (x < y) return true
      else if (x > y) return false
    }

    const compareLists = (x, y) => {
      if (typeof x === 'number' && typeof y === 'number') {
        const result = compareNumber(x, y)
        if (typeof result !== 'undefined') return result
      } else {
        if (typeof x === 'number') x = [x]
        if (typeof y === 'number') y = [y]
        let j = 0
        while (j < x.length) {
          if (typeof y[j] === 'undefined') return false
          const result = compareLists(x[j], y[j])
          if (typeof result !== 'undefined') return result
          j++
        }
        if (y.length > j) return true
      }
    }
    return compareLists(a, b) ? prev + i + 1 : prev
  }, 0)
}

module.exports = day13a
