const day1a = require('./calendar/day1a')
const day1b = require('./calendar/day1b')
const day2a = require('./calendar/day2a')
const day2b = require('./calendar/day2b')

const days = { day1a: day1a(), day1b: day1b(), day2a: day2a(), day2b: day2b() }
const dayToRun = days?.[process.argv[2]] || days[Object.keys(days).pop()]
console.log(dayToRun)
