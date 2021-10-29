// // подключаем экспресс
// const express = require('express')
//
// // присваиваем и запускаем
// const app = express()
//
// //настраиваем корректное отображение
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
//
// //запрашиваем роутеры из routes/user.router.js
// const userRouter = require('./routes/user.router')
// //используем роутеры (инпоинт, логика)
// app.use('/users', userRouter)
//
// //запускаем
// app.listen(5000, () => {
//   console.log(`app listen 5000`)
// })

const express = require('express')

// подключаем мангуст
const mongoose = require('mongoose')
//указываем место создания базы
mongoose.connect('mongodb://localhost:27017/june2021')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/user.router')
app.use('/users', userRouter)


app.listen(5000, ()=> {
  console.log(`port 5000 ready`)
})




