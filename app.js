const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
]

// Modifies data
const storeUser = (users, user) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() === user.name.toLowerCase()) {
      users[i] = user
      break
    }
  }
}

// Pure functions
const cloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const getUser = (users, name) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() === name.toLowerCase()) {
      return users[i]
    }
  }
  return null
}

const updateScore = (user, newAmmount) => {
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
const user = getUser(users, 'Henry')
const user1 = updateScore(cloneObject(user), 30)
const user2 = updateTries(cloneObject(user1))
storeUser(users, user2)

console.log(users)
console.log(user) // This will have the user updated even if we used the pure functions because data is passed by reference

console.log(user1) // this will keep the new cloned object from user
console.log(user2) // this will keep the new cloned object from user1
