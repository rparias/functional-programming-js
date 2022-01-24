var _ = require('lodash') // normal lodash
var fp = require('lodash/fp') // lodash with FP

// Normal approach
const sum = (a, b) => _.add(a, b)
console.log('Normal approach', sum(5, 2))

// Same approach with Functional Programming (FP)
const add5 = fp.add(5)
const result = add5(2)
console.log('FP approach', result)
