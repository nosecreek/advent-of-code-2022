const fs = require('fs')

const day12a = () => {
  const input = fs.readFileSync('./inputs/day12.txt', 'utf8')

  let start, end
  let steps = 0
  const map = input.split(/\n/).map((row, y) =>
    row.split('').map((e, x) => {
      if (e === 'S') {
        start = [y, x, 0]
        return 97
      } else if (e === 'E') {
        end = [y, x]
        return 122
      }
      return e.charCodeAt(0)
    })
  )

  const tryRight = (current) => {
    try {
      if (map[current[0]][current[1] + 1] - map[current[0]][current[1]] <= 1) {
        current = [current[0], current[1] + 1, current[2] + 1]
        return current
      }
    } catch {
      return false
    }
    return false
  }

  const tryLeft = (current) => {
    try {
      if (map[current[0]][current[1] - 1] - map[current[0]][current[1]] <= 1) {
        current = [current[0], current[1] - 1, current[2] + 1]
        return current
      }
    } catch {
      return false
    }
    return false
  }

  const tryDown = (current) => {
    try {
      if (map[current[0] + 1][current[1]] - map[current[0]][current[1]] <= 1) {
        current = [current[0] + 1, current[1], current[2] + 1]
        return current
      }
    } catch {
      return false
    }
    return false
  }

  const tryUp = (current) => {
    try {
      if (map[current[0] - 1][current[1]] - map[current[0]][current[1]] <= 1) {
        current = [current[0] - 1, current[1], current[2] + 1]
        return current
      }
    } catch {
      return false
    }
    return false
  }

  let paths = [start]
  const directions = [tryRight, tryLeft, tryDown, tryUp]
  const visited = []
  let answer = false
  while (answer === false) {
    const newPaths = []
    paths.forEach((path, i) => {
      if (path[2] !== steps) {
        paths.splice(i, 1)
      } else {
        directions.forEach((dir) => {
          const newPath = dir(path)
          if (newPath && !visited.includes(`${newPath[0]},${newPath[1]}`)) {
            newPaths.push(newPath)
            visited.push(`${newPath[0]},${newPath[1]}`)
          }
          if (newPath[0] === end[0] && newPath[1] === end[1]) {
            answer = newPath[2]
          }
        })
      }
    })
    paths = newPaths
    steps++
  }

  return answer
}

module.exports = day12a
