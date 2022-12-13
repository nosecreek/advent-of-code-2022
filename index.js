const days = {
  day1a: require('./calendar/day1a'),
  day1b: require('./calendar/day1b'),
  day2a: require('./calendar/day2a'),
  day2b: require('./calendar/day2b'),
  day3a: require('./calendar/day3a'),
  day3b: require('./calendar/day3b'),
  day4a: require('./calendar/day4a'),
  day4b: require('./calendar/day4b'),
  day5a: require('./calendar/day5a'),
  day5b: require('./calendar/day5b'),
  day6a: require('./calendar/day6a'),
  day6b: require('./calendar/day6b'),
  day7a: require('./calendar/day7a'),
  day7b: require('./calendar/day7b'),
  day8a: require('./calendar/day8a'),
  day8b: require('./calendar/day8b'),
  day9a: require('./calendar/day9a'),
  day9b: require('./calendar/day9b'),
  day10a: require('./calendar/day10a'),
  day10b: require('./calendar/day10b'),
  day11a: require('./calendar/day11a'),
  day11b: require('./calendar/day11b'),
  day12a: require('./calendar/day12a')
}

const dayToRun = days?.[process.argv[2]] || days[Object.keys(days).pop()]
console.log(dayToRun())
