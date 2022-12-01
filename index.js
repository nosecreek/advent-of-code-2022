day1a = require('./calendar/day1a')
day1b = require('./calendar/day1b')

const days = { day1a: day1a(), day1b: day1b() }
const dayToRun = days?.[process.argv[2]] || days[Object.keys(days).pop()]
console.log(dayToRun)
