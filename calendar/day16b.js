const fs = require('fs')

const day16b = () => {
  const input = fs.readFileSync('./inputs/day16.txt', 'utf8')

  const valves = {}

  input.split(/\n/).forEach((valve) => {
    const id = valve.split(' ')[1]
    const rate = valve.split('rate=')[1].split(';')[0]
    const connected = valve.split(/valve |valves /)[1].split(', ')
    valves[id] = {
      rate: parseInt(rate),
      connections: []
    }

    connected.forEach((room) => {
      valves[id].connections.push(room)
    })
  })

  const totalValves = Object.values(valves).filter(
    (valve) => valve.rate !== 0
  ).length

  let paths = [{ you: 'AA', elephant: 'AA', open: [], rate: 0, pressure: 0 }]
  for (let i = 0; i < 26; i++) {
    let newPaths = []
    paths.forEach((path) => {
      path.pressure += path.rate

      if (path.open.length !== totalValves) {
        if (
          path.elephant !== path.you &&
          !path.open.includes(path.you) &&
          !path.open.includes(path.elephant) &&
          valves[path.you].rate !== 0 &&
          valves[path.elephant].rate !== 0
        ) {
          const newPath = { ...path }
          newPath.open = [...newPath.open]
          newPath.open.push(path.you)
          newPath.open.push(path.elephant)
          newPath.rate =
            path.rate + valves[path.you].rate + valves[path.elephant].rate
          newPaths.push(newPath)
        }
        if (!path.open.includes(path.you) && valves[path.you].rate !== 0) {
          valves[path.elephant].connections.forEach((room) => {
            const newPath = { ...path }
            newPath.open = [...newPath.open]
            newPath.open.push(path.you)
            newPath.rate = path.rate + valves[path.you].rate
            newPath.elephant = room
            newPaths.push(newPath)
          })
        }
        if (
          !path.open.includes(path.elephant) &&
          valves[path.elephant].rate !== 0 &&
          path.elephant !== path.you
        ) {
          valves[path.you].connections.forEach((room) => {
            const newPath = { ...path }
            newPath.open = [...newPath.open]
            newPath.open.push(path.elephant)
            newPath.rate = path.rate + valves[path.elephant].rate
            newPath.you = room
            newPaths.push(newPath)
          })
        }
        valves[path.you].connections.forEach((yroom) => {
          valves[path.elephant].connections.forEach((eroom) => {
            const newPath = { ...path }
            newPath.you = yroom
            newPath.elephant = eroom
            newPaths.push(newPath)
          })
        })
      } else {
        newPaths.push(path)
      }
    })
    paths = newPaths
      .sort((a, b) => (a.pressure > b.pressure ? -1 : 1))
      .slice(0, 40000)
  }

  return paths[0].pressure
}

module.exports = day16b
