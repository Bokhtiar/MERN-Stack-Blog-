const BlogRoute = require('express').Router()
const BlogController = require('../controllers/Blog.controller')

BlogRoute.get("/", BlogController.Index)
BlogRoute.post("/", BlogController.Store)
BlogRoute.get("/:id", BlogController.Show)

module.exports = BlogRoute