const day1a = require('./calendar/day1a')
const day1b = require('./calendar/day1b')
const day2a = require('./calendar/day2a')
const day2b = require('./calendar/day2b')
const day3a = require('./calendar/day3a')
const day3b = require('./calendar/day3b')
const day4a = require('./calendar/day4a')
const day4b = require('./calendar/day4b')
const day5a = require('./calendar/day5a')
const day5b = require('./calendar/day5b')
const day6a = require('./calendar/day6a')
const day6b = require('./calendar/day6b')
const day7a = require('./calendar/day7a')
const day7b = require('./calendar/day7b')
const day8a = require('./calendar/day8a')
const day8b = require('./calendar/day8b')
const day9a = require('./calendar/day9a')
const day9b = require('./calendar/day9b')
const day10a = require('./calendar/day10a')

const days = {
  day1a: day1a(),
  day1b: day1b(),
  day2a: day2a(),
  day2b: day2b(),
  day3a: day3a(),
  day3b: day3b(),
  day4a: day4a(),
  day4b: day4b(),
  day5a: day5a(),
  day5b: day5b(),
  day6a: day6a(),
  day6b: day6b(),
  day7a: day7a(),
  day7b: day7b(),
  day8a: day8a(),
  day8b: day8b(),
  day9a: day9a(),
  day9b: day9b(),
  day10a: day10a()
}
const dayToRun = days?.[process.argv[2]] || days[Object.keys(days).pop()]
console.log(dayToRun)
