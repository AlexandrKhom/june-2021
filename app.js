// const user = require('./helper/user-builder')
// console.log(222)
// user.createUser('alex', 22).greeting()

const fs = require('fs')
const path = require('path')

fs.readFile(`${__dirname}/files/test.txt`, ((err, data)=> {
  if (err){
    console.log(err)
    return
  }
  console.log(data)
}))

