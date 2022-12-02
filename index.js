day1a = require('./calendar/day1a')
day1b = require('./calendar/day1b')
day2a = require('./calendar/day2a')

const days = { day1a: day1a(), day1b: day1b(), day2a: day2a() }
const dayToRun = days?.[process.argv[2]] || days[Object.keys(days).pop()]
console.log(dayToRun)
