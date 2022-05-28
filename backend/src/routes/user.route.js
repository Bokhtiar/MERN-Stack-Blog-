const userRoute = require('express').Router()
const UserController = require('../controllers/User.Controller')

userRoute.get("/", UserController.Index)
userRoute.post("/", UserController.Store)
userRoute.post("/login", UserController.Login)
userRoute.get("/logdinUser", UserController.logdinUser)

module.exports = userRoute