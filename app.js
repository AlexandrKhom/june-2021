const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/june2021');




app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/user.router')
app.use('/users', userRouter)

app.listen(5000, ()=> {
  console.log('App listen 5000')
})



