const fs = require('fs')

const day15a = () => {
  const input = fs.readFileSync('./inputs/day15.txt', 'utf8')

  let map = []
  const row = 2000000

  input.split(/\n/).forEach((line, k) => {
    const [sensor, beacon] = line
      .split(':')
      .map((loc) => loc.match(/\-\d+|\d+/g).map((coord) => parseInt(coord)))
    const xdif = Math.abs(sensor[0] - beacon[0])
    const ydif = Math.abs(sensor[1] - beacon[1])
    const dif = xdif + ydif
    for (let i = -1 * dif; i <= dif; i++) {
      const yoffset = dif - Math.abs(i)
      if (
        (sensor[1] + yoffset >= row && row > sensor[1]) ||
        (sensor[1] - yoffset <= row && row < sensor[1])
      ) {
        if (map[i + sensor[0]] !== 2) map[i + sensor[0]] = 1
      }
    }

    if (beacon[1] === row) map[beacon[0]] = 2
  })

  return Object.keys(map).filter((x) => map[x] === 1).length
}

module.exports = day15a
