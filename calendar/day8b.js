const fs = require('fs')

const day8b = () => {
  const input = fs.readFileSync('./inputs/day8.txt', 'utf8')

  const trees = input
    .split(/\n/)
    .map((row) => row.split('').map((n) => parseInt(n)))

  //check left
  const left = (tree, i, j) => {
    let x = 0
    for (let k = j - 1; k >= 0; k--) {
      x++
      if (trees[i][k] >= tree) {
        break
      }
    }
    return x
  }

  //check right
  const right = (tree, i, j) => {
    let x = 0
    for (let k = j + 1; k < trees[0].length; k++) {
      x++
      if (trees[i][k] >= tree) {
        break
      }
    }
    return x
  }

  //check up
  const up = (tree, i, j) => {
    let x = 0
    for (let k = i - 1; k >= 0; k--) {
      x++
      if (trees[k][j] >= tree) {
        break
      }
    }
    return x
  }

  //check down
  const down = (tree, i, j) => {
    let x = 0
    for (let k = i + 1; k < trees.length; k++) {
      x++
      if (trees[k][j] >= tree) {
        break
      }
    }
    return x
  }

  const answer = []

  trees.forEach((row, i) => {
    row.forEach((tree, j) => {
      answer.push(
        left(tree, i, j) * right(tree, i, j) * up(tree, i, j) * down(tree, i, j)
      )
    })
  })

  return Math.max(...answer)
}

module.exports = day8b
