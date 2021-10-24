// const user = require('./helper/user-builder')
// console.log(222)
// user.createUser('alex', 22).greeting()

const fs = require('fs')
const path = require('path')

// fs.readFile(`${__dirname}/files/test.txt`, ((err, data)=> {
//   if (err){
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
// }))

// fs.writeFile(`${__dirname}/files/test.txt`, 'hello', (err)=> {
//   if (err){
//     console.log(err)}
// })

// fs.appendFile(`${__dirname}/files/test.txt`, 'hello', (err)=> {
//   if (err){
//     console.log(err)}
// })
//
// console.log(__dirname);
// console.log(__filename);

// const pathFile = path.join(__dirname, 'files', 'append.txt')
// console.log(pathFile)

// const mkdirPath = path.join(__dirname, 'files', 'test', 'user')
//
// fs.mkdir(mkdirPath, {recursive: true}, err => {
//   console.log(err)
// })

// fs.unlink(`${__dirname}/files/test/user/user.js`, err => {
//   console.log(err)
// })

fs.rename(`${__dirname}/files/test/user/user.js`,
  path.join(__dirname, 'helper', 'userNew'),
  err => {
    console.log(err)
  })

