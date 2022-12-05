const fs = require('fs')

const day5a = () => {
  const input = fs.readFileSync('./inputs/day5.txt', 'utf8')

  const rows = input.split('1')[0].split(/\n/)
  const cols = new Array(Math.ceil(rows[0].length / 4)).fill([])
  rows.forEach((row, i) => {
    row.match(/.{1,4}/g).forEach((item, j) => {
      if (item.match(/[A-Z]/g)) {
        cols[j] = cols[j].concat(item.match(/[A-Z]/g))
      }
    })
  })

  const moves = input.split('\nmove ').slice(1)
  moves.forEach((move) => {
    const [amount, start, end] = move.split(/ from | to /g)
    cols[end - 1].unshift(...cols[start - 1].slice(0, amount))
    cols[start - 1] = cols[start - 1].slice(amount)
  })

  let answer = ''
  cols.forEach((col) => {
    answer += col[0]
  })

  return answer
}

module.exports = day5a
