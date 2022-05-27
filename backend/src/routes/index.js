const appRouter = require('express').Router()
const CategoryRoute = require('./Category.route')
const BlogRouter = require('./Blog.route')
const UserRoute = require('./user.route')
const ContactRoute = require('./Contact.route')
const NewsRoute = require('./news.route')
const AdminRoute = require('./admin.route')

appRouter.use('/category', CategoryRoute)
appRouter.use('/blog', BlogRouter)
appRouter.use('/user', UserRoute)
appRouter.use('/admin', AdminRoute)
appRouter.use('/contact', ContactRoute)
appRouter.use('/news', NewsRoute)


module.exports = appRouter