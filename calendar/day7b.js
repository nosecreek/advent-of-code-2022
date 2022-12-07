const fs = require('fs')

const day7b = () => {
  const input = fs.readFileSync('./inputs/day7.txt', 'utf8')

  const commands = input.split(/\n/)
  let cd = { size: 0 }
  const dirs = []

  commands.forEach((cmd) => {
    if (cmd.match(/\$ cd /)) {
      if (cmd.match(/\.\./)) {
        dirs.push(cd.size)
        cd = cd.parent
      } else {
        const newdir = cmd.split('cd ')[1]
        if (!cd[newdir]) {
          cd[newdir] = { parent: cd, size: 0 }
        }
        cd = cd[newdir]
      }
    } else if (!cmd.match(/dir|\$/)) {
      const [size, id] = cmd.split(' ')
      if (!cd[id]) {
        cd[id] = { size: size }
        cd.size += parseInt(size)
        let tmpcd = cd
        while (tmpcd.parent) {
          tmpcd = tmpcd.parent
          tmpcd.size += parseInt(size)
        }
      }
    }
  })

  //make sure we return to the top level before returning our answer
  while (cd.parent) {
    dirs.push(cd.size)
    cd = cd.parent
  }

  const unused = 70000000 - cd.size
  const required = 30000000 - unused
  return dirs.reduce((a, b) => (b >= required && b < a ? b : a), cd.size)
}

module.exports = day7b
