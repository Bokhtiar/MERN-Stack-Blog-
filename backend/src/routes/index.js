const appRouter = require('express').Router()
const CategoryRoute = require('./Category.route')

appRouter.use('/category', CategoryRoute)


module.exports = appRouter