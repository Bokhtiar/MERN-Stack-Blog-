const BlogRoute = require('express').Router()
const BlogController = require('../controllers/Blog.controller')

BlogRoute.get("/", BlogController.Index)
BlogRoute.post("/", BlogController.Store)
BlogRoute.get("/:id", BlogController.Show)
BlogRoute.put("/:id", BlogController.Update)
BlogRoute.delete("/:id", BlogController.Destroy)

module.exports = BlogRoute