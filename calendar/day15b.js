// Note: my optimization isn't great, so the memory limit needs to be increased in
// order to run successfully. With enough memory, it will run in less than a minute.
// Use `node --max_old_space_size=4096 index.js "day15b"` to run with 4GB of memory

const fs = require('fs')

const day15b = () => {
  const input = fs.readFileSync('./inputs/day15.txt', 'utf8')

  let map = []
  const limit = 4000000

  input.split(/\n/).forEach((line, k) => {
    const [sensor, beacon] = line
      .split(':')
      .map((loc) => loc.match(/\-\d+|\d+/g).map((coord) => parseInt(coord)))
    const xdif = Math.abs(sensor[0] - beacon[0])
    const ydif = Math.abs(sensor[1] - beacon[1])
    const dif = xdif + ydif
    for (let i = -1 * dif; i <= dif; i++) {
      if (sensor[0] + i <= limit && sensor[0] + i >= 0) {
        const yoffset = dif - Math.abs(i)
        let start = sensor[1] - yoffset
        start = start > -1 ? start : 0
        let end = sensor[1] + yoffset
        end = end < limit ? end : limit
        if (!map[sensor[0] + i]) map[sensor[0] + i] = []
        map[sensor[0] + i].push([start, end])
      }
    }
  })

  //merge ranges
  let answer = []
  map.forEach((row, j) => {
    row.sort((a, b) => a[0] - b[0])
    let i = 0
    while (i < row.length - 1) {
      if (
        (row[i][1] >= row[i + 1][0] - 1 && row[i + 1][0] >= row[i][0]) ||
        (row[i][1] >= row[i + 1][1] && row[i + 1][1] >= row[i][0] - 1)
      ) {
        row[i + 1] = [
          Math.min(row[i][0], row[i + 1][0]),
          Math.max(row[i][1], row[i + 1][1])
        ]
        row.splice(i, 1)
      } else {
        i++
      }
    }
    if (row.length !== 1) {
      answer = [j, row[0][1] + 1]
    }
  })

  return answer[0] * 4000000 + answer[1]
}

module.exports = day15b
