const appRouter = require('express').Router()
const CategoryRoute = require('./Category.route')
const BlogRouter = require('./Blog.route')

appRouter.use('/category', CategoryRoute)
appRouter.use('/blog', BlogRouter)


module.exports = appRouter