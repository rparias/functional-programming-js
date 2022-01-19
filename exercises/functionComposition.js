console.log('Function composition with pipe and compose')

const myString = 'Innovation distinguishes between a leader and a follower.'

// Functions that will be used on compose and pipe
const trim = (string) => string.replace(/^\s*|\s*$/g, '')

const noPunctuation = (string) => string.replace(/[?.,!]/g, '')

const capitalize = (string) => string.toUpperCase()

const breakout = (string) => string.split(' ')

const noArticles = (string) =>
  string !== 'A' && string !== 'AN' && string !== 'THE'

const filterArticles = (array) => array.filter(noArticles)

// Ugly way to get the same result
const uglyArray = filterArticles(
  breakout(capitalize(noPunctuation(trim(myString))))
)
console.log(uglyArray)

// Using Compose - right to left with reduceRight
const compose = (...fns) => {
  return (x) => {
    return fns.reduceRight((value, f) => {
      return f(value)
    }, x)
  }
}

const prepareStringWithCompose = compose(
  filterArticles,
  breakout,
  capitalize,
  noPunctuation,
  trim
)

const composeArray = prepareStringWithCompose(myString)
console.log(composeArray)

// Using Pipe - left to right with reduce
const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((value, f) => {
      return f(value)
    }, x)
  }
}

const prepareStringWithPipe = pipe(
  trim,
  noPunctuation,
  capitalize,
  breakout,
  filterArticles
)

const pipeArray = prepareStringWithCompose(myString)
console.log(pipeArray)
