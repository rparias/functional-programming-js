// Using Pipe - left to right with reduce
const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((value, f) => {
      return f(value)
    }, x)
  }
}

// Using Compose - right to left with reduceRight
const compose = (...fns) => {
  return (x) => {
    return fns.reduceRight((value, f) => {
      return f(value)
    }, x)
  }
}

// Using currying
const curry = (fn, arity = fn.length) => {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      var args = [...prevArgs, nextArg]
      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

module.exports = { pipe, compose, curry }
