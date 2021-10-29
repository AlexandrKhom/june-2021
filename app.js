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
const mongoose = require('mongoose')
const { MONGO_CONNECT_URL, PORT } = require("./configs/config");
mongoose.connect(MONGO_CONNECT_URL)

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/user.router')
app.use('/users', userRouter)


app.listen(PORT, ()=> {
  console.log(`port 5000 ready ${PORT}`)
})

