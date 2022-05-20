const CategoryRoute = require('express').Router()
const CategoryController = require('../controllers/Category.Controller')


CategoryRoute.get("/", CategoryController.Index)
CategoryRoute.post("/", CategoryController.Store)
CategoryRoute.get("/:id", CategoryController.Show)
CategoryRoute.put("/:id", CategoryController.Update)
CategoryRoute.delete("/:id", CategoryController.Destroy)


module.exports = CategoryRoute