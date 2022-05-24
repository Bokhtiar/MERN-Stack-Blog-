const NewsRoute = require('express').Router()
const NewsController = require('../controllers/news.controller')

NewsRoute.get('/', NewsController.Index)
NewsRoute.post('/', NewsController.Store)
NewsRoute.get('/:id', NewsController.Show)
NewsRoute.put('/:id', NewsController.Update)
NewsRoute.delete('/:id', NewsController.Destroy)

module.exports = NewsRoute