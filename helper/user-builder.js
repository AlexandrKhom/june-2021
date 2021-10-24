const createUser = (name, age) => {
  return {
    name,
    age,
    greeting: ()=> {
      console.log(`Hello, my name is ${name} and I am ${age} years old`)
    }
  }
}

// console.log(111)

module.exports = {createUser}
