const {getUsers, createUsers, deleteUsers} = require("../controllers/user.controller");
const router = require('express').Router()

router.get('/', getUsers)

router.post('/', createUsers)

router.delete('/', deleteUsers)



module.exports = router






