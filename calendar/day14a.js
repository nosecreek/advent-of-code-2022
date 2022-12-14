const fs = require('fs')

const day14a = () => {
  const input = fs.readFileSync('./inputs/day14.txt', 'utf8')

  let map = []

  input.split(/\n/).forEach((rock) => {
    const lines = rock
      .split(' -> ')
      .map((line) => line.split(',').map((x) => parseInt(x)))
    lines.slice(1).forEach((line, i) => {
      if (lines[i][0] === line[0]) {
        if (lines[i][1] > line[1]) {
          for (let j = line[1]; j <= lines[i][1]; j++) {
            if (!map[j]) map[j] = []
            map[j][line[0]] = 1
          }
        } else {
          for (let j = line[1]; j >= lines[i][1]; j--) {
            if (!map[j]) map[j] = []
            map[j][line[0]] = 1
          }
        }
      } else {
        if (lines[i][0] > line[0]) {
          for (let j = line[0]; j <= lines[i][0]; j++) {
            if (!map[line[1]]) map[line[1]] = []
            map[line[1]][j] = 1
          }
        } else {
          for (let j = line[0]; j >= lines[i][0]; j--) {
            if (!map[line[1]]) map[line[1]] = []
            map[line[1]][j] = 1
          }
        }
      }
    })
  })

  const source = [0, 500]
  let count = 0
  let loop = true

  while (loop) {
    let sand = source

    while (true) {
      if (sand[0] > map.length) {
        loop = false
        break
      }
      if (map[sand[0] + 1]?.[sand[1]] !== 1) {
        sand = [sand[0] + 1, sand[1]]
      } else if (map[sand[0] + 1]?.[sand[1] - 1] !== 1) {
        sand = [sand[0] + 1, sand[1] - 1]
      } else if (map[sand[0] + 1]?.[sand[1] + 1] !== 1) {
        sand = [sand[0] + 1, sand[1] + 1]
      } else {
        if (!map[sand[0]]) map[sand[0]] = []
        map[sand[0]][sand[1]] = 1
        count++
        break
      }
    }
  }

  return count
}

module.exports = day14a
