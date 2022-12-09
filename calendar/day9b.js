const fs = require('fs')

const day9b = () => {
  const input = fs.readFileSync('./inputs/day9.txt', 'utf8')

  const steps = input.split(/\n/)

  const head = [100, 100]
  const knots = 9
  const tail = new Array(knots).fill(null).map(() => [100, 100])
  const visited = {}
  visited['100.100'] = 1

  steps.forEach((step) => {
    let [dir, n] = step.split(' ')
    while (n > 0) {
      if (dir === 'U') {
        head[1]--
      } else if (dir === 'D') {
        head[1]++
      } else if (dir === 'L') {
        head[0]--
      } else {
        head[0]++
      }
      n--

      tail.forEach((knot, i) => {
        lead = i === 0 ? head : tail[i - 1]
        if (!(lead[0] === knot[0] && lead[1] === knot[1])) {
          if (lead[0] + 1 < knot[0]) {
            knot[0]--
            if (lead[1] < knot[1]) {
              knot[1]--
            } else if (lead[1] > knot[1]) {
              knot[1]++
            }
          } else if (lead[0] - 1 > knot[0]) {
            knot[0]++
            if (lead[1] < knot[1]) {
              knot[1]--
            } else if (lead[1] > knot[1]) {
              knot[1]++
            }
          } else if (lead[1] + 1 < knot[1]) {
            knot[1]--
            if (lead[0] < knot[0]) {
              knot[0]--
            } else if (lead[0] > knot[0]) {
              knot[0]++
            }
          } else if (lead[1] - 1 > knot[1]) {
            knot[1]++
            if (lead[0] < knot[0]) {
              knot[0]--
            } else if (lead[0] > knot[0]) {
              knot[0]++
            }
          }
        }
      })
      visited[`${tail[knots - 1][0]}.${tail[knots - 1][1]}`] = 1
    }
  })

  return Object.keys(visited).length
}

module.exports = day9b
