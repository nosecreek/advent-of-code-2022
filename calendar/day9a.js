const fs = require('fs')

const day9a = () => {
  const input = fs.readFileSync('./inputs/day9.txt', 'utf8')

  const steps = input.split(/\n/)

  const head = [100, 100]
  const tail = [100, 100]
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

      if (!(head[0] === tail[0] && head[1] === tail[1])) {
        if (head[0] + 1 < tail[0]) {
          tail[0]--
          if (head[1] < tail[1]) {
            tail[1]--
          } else if (head[1] > tail[1]) {
            tail[1]++
          }
        } else if (head[0] - 1 > tail[0]) {
          tail[0]++
          if (head[1] < tail[1]) {
            tail[1]--
          } else if (head[1] > tail[1]) {
            tail[1]++
          }
        } else if (head[1] + 1 < tail[1]) {
          tail[1]--
          if (head[0] < tail[0]) {
            tail[0]--
          } else if (head[0] > tail[0]) {
            tail[0]++
          }
        } else if (head[1] - 1 > tail[1]) {
          tail[1]++
          if (head[0] < tail[0]) {
            tail[0]--
          } else if (head[0] > tail[0]) {
            tail[0]++
          }
        }
      }
      visited[`${tail[0]}.${tail[1]}`] = 1
    }
  })

  return Object.keys(visited).length
}

module.exports = day9a
