const { pipe, curry } = require('./utils')

// ------------------- EXERCISE 1 ------------------- //
const funcF = (a, b, c) => a + b + c
const funcG = (d, e) => d + e
const funcH = (f, g, h) => f + g + h

// curry for previous functions
const curriedF = curry(funcF)
const curriedG = curry(funcG)
const curriedH = curry(funcH)

// composition with pipe for curried functions
const newFunction = pipe(
  curriedF(1)(2), //a b
  curriedG(4), // d
  curriedH(5)(6) // f g
)

// execute all functions with a single parameter
// 3 will take the value of c in curriedF
// result of curriedF will take the value of e in curriedG
// result of curriedG will take the value of h in curriedH
const result = newFunction(3)

console.log(result) // 21

// ------------------- EXERCISE 2 ------------------- //
const doubleNum = (num) => num + num
const totalIt = (n1, n2, n3, n4) => n1 + n2 + n3 + n4
const doArray = (num1, num2) => [num1, num2]

const composedFunction = pipe(
  doubleNum, // dont need curry here because arity = 1
  curry(totalIt)(1)(2)(3),
  curry(doArray)(22)
)

const resultComposed = composedFunction(3)
console.log(resultComposed) // [22, 12]
