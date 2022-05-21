const ContactRoute = require('express').Router()
const ContactController = require('../controllers/Contact.Controller')

    ContactRoute.post("/", ContactController.Store)

module.exports = ContactRoute