const express = require('express');

const app = express();

app.get('/users', (req, res)=> {
  res.json('hello world get user')
})

app.post('/users', (req, res)=> {
  res.json('hello world post user')
})

app.put('/users', (req, res)=> {
  res.json('hello world update user')
})

app.listen(5000, ()=> {
  console.log('App listen 5000')
})






