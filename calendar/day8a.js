const fs = require('fs')

const day8a = () => {
  const input = fs.readFileSync('./inputs/day8.txt', 'utf8')

  const trees = input
    .split(/\n/)
    .map((row) => row.split('').map((n) => parseInt(n)))

  let answer = trees.length * 2 - 4 + trees[0].length * 2

  //check left
  const left = (tree, i, j) => {
    for (let k = j; k >= 0; k--) {
      if (trees[i + 1][k] >= tree) {
        return false
      }
    }
    return true
  }

  //check right
  const right = (tree, i, j) => {
    for (let k = j + 2; k < trees[0].length; k++) {
      if (trees[i + 1][k] >= tree) {
        return false
      }
    }
    return true
  }

  //check up
  const up = (tree, i, j) => {
    for (let k = i; k >= 0; k--) {
      if (trees[k][j + 1] >= tree) {
        return false
      }
    }
    return true
  }

  //check down
  const down = (tree, i, j) => {
    for (let k = i + 2; k < trees.length; k++) {
      if (trees[k][j + 1] >= tree) {
        return false
      }
    }
    return true
  }

  trees.slice(1, trees.length - 1).forEach((row, i) => {
    row.slice(1, row.length - 1).forEach((tree, j) => {
      if (
        left(tree, i, j) ||
        right(tree, i, j) ||
        up(tree, i, j) ||
        down(tree, i, j)
      ) {
        answer++
      }
    })
  })

  return answer
}

module.exports = day8a
