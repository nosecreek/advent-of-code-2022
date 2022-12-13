const fs = require('fs')

const day13b = () => {
  const input = fs.readFileSync('./inputs/day13.txt', 'utf8')
  const lines = `${input}\n[[2]]\n[[6]]`
    .split(/\n\n|\n/)
    .map((x) => JSON.parse(x))

  const sorted = lines.sort((a, b) => {
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
    return compareLists(a, b) ? -1 : 1
  }, 0)

  return (
    (sorted.findIndex((x) => JSON.stringify(x) === '[[2]]') + 1) *
    (sorted.findIndex((x) => JSON.stringify(x) === '[[6]]') + 1)
  )
}

module.exports = day13b
