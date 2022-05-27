const appRouter = require('express').Router()
const CategoryRoute = require('./Category.route')
const BlogRouter = require('./Blog.route')
const UserRoute = require('./user.route')
const ContactRoute = require('./Contact.route')
const NewsRoute = require('./news.route')
const AdminRoute = require('./admin.route')
const adminPermission = require('../middleware/admin.permission.middleware')
const userPermission = require('../middleware/user.permission.middleware')

appRouter.use('/category', adminPermission.IsAdmin, CategoryRoute)
appRouter.use('/blog', BlogRouter)
appRouter.use('/user', UserRoute)
appRouter.use('/admin', AdminRoute)
appRouter.use('/contact', ContactRoute)
appRouter.use('/news', userPermission.IsUser, NewsRoute)


module.exports = appRouter