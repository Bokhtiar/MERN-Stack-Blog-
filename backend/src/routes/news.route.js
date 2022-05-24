const NewsRoute = require('express').Router()
const NewsController = require('../controllers/news.controller')

NewsRoute.get('/', NewsController.Index)
NewsRoute.post('/', NewsController.Store)

module.exports = NewsRoute