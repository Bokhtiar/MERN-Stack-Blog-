const AuthRouter = require('express').Router()
const AuthController = require('../controllers/Auth.Controller')

AuthRouter.post('/', AuthController.Login)

module.exports = AuthRouter