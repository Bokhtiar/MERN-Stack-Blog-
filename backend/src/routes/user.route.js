const userRoute = require('express').Router()
const UserController = require('../controllers/User.Controller')

userRoute.get("/", UserController.Index)
userRoute.post("/", UserController.Store)

module.exports = userRoute