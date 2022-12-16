const fs = require('fs')

const day16a = () => {
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

  let paths = [{ current: 'AA', open: [], rate: 0, pressure: 0 }]
  for (let i = 0; i < 30; i++) {
    let newPaths = []
    paths.forEach((path) => {
      path.pressure += path.rate

      if (path.open.length !== totalValves) {
        if (
          !path.open.includes(path.current) &&
          valves[path.current].rate !== 0
        ) {
          const newPath = { ...path }
          newPath.open = [...newPath.open]
          newPath.open.push(path.current)
          newPath.rate = path.rate + valves[path.current].rate
          newPaths.push(newPath)
        }
        valves[path.current].connections.forEach((room) => {
          const newPath = { ...path }
          newPath.current = room
          newPaths.push(newPath)
        })
      } else {
        newPaths.push(path)
      }
    })
    paths = newPaths
      .sort((a, b) => (a.pressure > b.pressure ? -1 : 1))
      .slice(0, 100000)
  }

  return paths[0].pressure
}

module.exports = day16a
