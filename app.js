const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/june2021')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRouter = require('./routes/user.router')
app.use('/users', userRouter)

app.listen(5000, ()=> {
  console.log('port 5000 ready')
})
