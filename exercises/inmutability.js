'use strict'
const array = [3, 4, 2, 5, 1, 6]
Object.freeze(array)

const cloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const sortedArray = cloneObject(array).sort()

console.log('original array: ', array) // => [3, 4, 2, 5, 1, 6]
console.log('sorted array: ', sortedArray) // => [1, 2, 3, 4, 5, 6]
