var _ = require('lodash/fp') // lodash with FP

const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110]
console.log(scores)

// any scores that are below 10 needs to be multiplied by 10 and the new value included
const belowTen = _.map((value) => (value < 10 ? value * 10 : value))

// remove any scores that are over 100
const over100 = _.filter((value) => value <= 100)

// remove any scores that are 0 or below
const zeroOrBelow = _.filter((value) => value > 0)

// average
const average = (scoresArray) => {
  return _.mean(scoresArray)
}

// Compose a function that will remove both zero or lower scores and scores over 100.
const removeZeroOrBelowAndOver100 = _.pipe(zeroOrBelow, over100)
console.log(removeZeroOrBelowAndOver100(scores))

// Compose a function that will do all the modifications
const allModifications = _.pipe(belowTen, over100, zeroOrBelow)
console.log(allModifications(scores))

// Compose a function that will prepare an array and return an average
const prepareArrayAverage = _.pipe(allModifications, average)
console.log(prepareArrayAverage(scores))

// Compose a function that will return the average of the original array
const averageArray = _.pipe(average)
console.log(averageArray(scores))
