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

module.exports = { pipe, compose }
