const day1a = require('./calendar/day1a')
const day1b = require('./calendar/day1b')
const day2a = require('./calendar/day2a')
const day2b = require('./calendar/day2b')
const day3a = require('./calendar/day3a')
const day3b = require('./calendar/day3b')
const day4a = require('./calendar/day4a')

const days = {
  day1a: day1a(),
  day1b: day1b(),
  day2a: day2a(),
  day2b: day2b(),
  day3a: day3a(),
  day3b: day3b(),
  day4a: day4a()
}
const dayToRun = days?.[process.argv[2]] || days[Object.keys(days).pop()]
console.log(dayToRun)
