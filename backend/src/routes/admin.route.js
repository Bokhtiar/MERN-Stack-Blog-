const adminRoute = require('express').Router()
const AdminController = require('../controllers/admin.controller')

adminRoute.post('/signup', AdminController.Store)
adminRoute.post('/login', AdminController.Login)

module.exports = adminRoute
