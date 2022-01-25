const R = require('ramda')

const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
]

const storeUser = (users, user) =>
  R.map((currentUser) =>
    // return currentUser.name.toLowerCase() === user.name.toLowerCase() ? user : currentUser
    R.eqBy(R.toLower, currentUser.name, user.name) ? user : currentUser
  )(users)

const getUser = (users, name) => {
  return R.reduce((obj, user) =>
    // return user.name.toLowerCase() === name.toLowerCase() ? user : obj
    R.eqBy(R.toLower, user.name, name) ? R.clone(user) : obj
  )(null)(users)
}

const updateScore = (newAmmount, user) => {
  return R.assoc('score', user.score + newAmmount, user)
}

const updateTries = (user) => {
  return R.assoc('tries', user.tries + 1, user)
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
const updateUser = R.pipe(partialGetUser, partialUpdateScore30, updateTries)

const newestUser = updateUser('Henry')
console.log(newestUser)

// Using currying and composition create a specialized function
// that always acts on the users array but allows you to enter a
// user name. Have it return a clone of that user.
const curriedGetUserCloned = R.curry(getUser)(users)
console.log(curriedGetUserCloned('Mary'))

// Using your curried function, compose a new specialized function
// that will be used to update Henry. (Only invoked if you want to
// update Henry). It should accepts a new score and then return the
// users that contains the updated score and tries for Herny. To
// compose this function you may need to create oher functions.
const updateScore2 = (user, newAmmount) => {
  const clonedUser = R.clone(user)

  if (clonedUser) {
    clonedUser.score += newAmmount
    return clonedUser
  }
}

const getHenry = () => curriedGetUserCloned('Henry')

const updateHenryScore = R.pipe(
  R.curry(updateScore2)(getHenry()),
  updateTries,
  R.curry(storeUser)(users)
)

console.log('Original scores array', users)
console.log('UpdateHenryScore', updateHenryScore(100))
