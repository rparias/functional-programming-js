const R = require('ramda')

const addOne = R.map((num) => num + 1)
const multiplyByThree = R.map((num) => num * 3)
const removeNumbersOver100 = R.filter((num) => num <= 100)
const logAndReturnData = (data) => {
  console.log(data)
  return data
}
const summAllNumbers = R.reduce((acc, num) => acc + num)(0)

const processNumbers = R.pipe(
  addOne,
  multiplyByThree,
  removeNumbersOver100,
  logAndReturnData,
  summAllNumbers,
  console.log
)

processNumbers([5, 8, 20, 40])
