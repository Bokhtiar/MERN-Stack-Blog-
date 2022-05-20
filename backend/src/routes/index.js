const appRouter = require('express').Router()
const CategoryRoute = require('./Category.route')
const BlogRouter = require('./Blog.route')
const UserRoute = require('./user.route')
const AuthRoute = require('./Auth.route')

appRouter.use('/category', CategoryRoute)
appRouter.use('/blog', BlogRouter)
appRouter.use('/user', UserRoute)
appRouter.use('/login', AuthRoute)


module.exports = appRouter