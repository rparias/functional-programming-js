const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110]
console.log(scores)

// any scores that are below 10 needs to be multiplied by 10 and the new value included
const belowTen = scores.map((value) => (value < 10 ? value * 10 : value))
console.log(belowTen)

// remove any scores that are over 100
const over100 = belowTen.filter((value) => value <= 100)
console.log(over100)

// remove any scores that are 0 or below
const zeroOrBelow = over100.filter((value) => value > 0)
console.log(zeroOrBelow)

// sum the scores
const sumScores = zeroOrBelow.reduce((acc, value) => {
  return acc + value
}, 0)
console.log(sumScores)

// provide a count for the number of scores still remaining
console.log('remaining:', zeroOrBelow.length)
