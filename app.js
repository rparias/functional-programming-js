const { pipe } = require('./exercises/utils')

const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
]

// Modifies data
const storeUser = (users, user) => {
  return users.map((currentUser) => {
    if (currentUser.name.toLowerCase() === user.name.toLowerCase()) {
      return user
    } else {
      return currentUser
    }
  })
}

// Pure functions
const cloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const getUser = (users, name) => {
  return users.reduce((obj, user) => {
    if (user.name.toLowerCase() === name.toLowerCase()) {
      return user
    } else {
      return obj
    }
  }, null)
}

const updateScore = (newAmmount, user) => {
  if (user) {
    user.score += newAmmount
    return user
  }
}

const updateTries = (user) => {
  if (user) {
    user.tries++
    return user
  }
}

// Checking functions
// const user = getUser(users, 'Henry')
// const user1 = updateScore(30, cloneObject(user))
// const user2 = updateTries(cloneObject(user1))
// const newArray = storeUser(users, user2) // now returns a new array

// Using partial functions with bind to refactor the previous lines
const partialGetUser = getUser.bind(null, users)
const partialUpdateScore30 = updateScore.bind(null, 30)

// Composition with pipe from previous functions
const updateUser = pipe(
  partialGetUser,
  cloneObject,
  partialUpdateScore30,
  updateTries
)

const newestUser = updateUser('Henry')
console.log(newestUser)
