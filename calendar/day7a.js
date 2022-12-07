const fs = require('fs')

const day7a = () => {
  const input = fs.readFileSync('./inputs/day7.txt', 'utf8')

  const commands = input.split(/\n/)
  let cd = { size: 0 }
  let answer = 0

  commands.forEach((cmd) => {
    if (cmd.match(/\$ cd /)) {
      if (cmd.match(/\.\./)) {
        if (cd.size <= 100000) {
          answer += cd.size
        }
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
  let tmpcd = cd
  while (tmpcd.parent) {
    if (tmpcd.size <= 100000) {
      answer += tmpcd.size
    }
    tmpcd = tmpcd.parent
  }

  return answer
}

module.exports = day7a
