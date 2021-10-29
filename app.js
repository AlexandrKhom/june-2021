const express = require('express')

const app = express()

app.get(`/users`, (req, res)=> {
res.json('Get Users')
})
app.post(`/users`, (req, res)=> {
  res.json('Post Users')
})
app.delete(`/users`, (req, res)=> {
  res.json('Delete Users')
})


app.listen(5000, ()=> {
  console.log(`app listen 5000`)
})






