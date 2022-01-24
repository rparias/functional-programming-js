var _ = require('lodash') // normal lodash
var fp = require('lodash/fp') // lodash with FP

// Normal approach
const normalApproach = (array) => {
  const addOne_ = _.map(array, (num) => num + 1)
  const multiplyByThree_ = _.map(addOne_, (num) => num * 3)
  const removeNumbersOver100_ = _.filter(multiplyByThree_, (num) => num <= 100)
  const summAllNumbers_ = _.reduce(
    removeNumbersOver100_,
    (acc, num) => acc + num,
    0
  )
  return summAllNumbers_
}
const processNumbers_ = normalApproach([5, 8, 20, 40])
console.log(processNumbers_)

// Same approach with Functional Programming (FP)
const addOne = fp.map((num) => num + 1)
const multiplyByThree = fp.map((num) => num * 3)
const removeNumbersOver100 = fp.filter((num) => num <= 100)
const logAndReturnData = (data) => {
  console.log(data)
  return data
}
const summAllNumbers = fp.reduce((acc, num) => acc + num)(0)

// flow = pipe
// flowRight = compose

const processNumbers = fp.pipe(
  addOne,
  multiplyByThree,
  removeNumbersOver100,
  logAndReturnData,
  summAllNumbers,
  console.log
)

processNumbers([5, 8, 20, 40])
