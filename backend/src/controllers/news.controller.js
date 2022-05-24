const News = require('../models/news.model')

/* News List Start*/
const Index = async (req, res, next) => {
    try {
        const results = await News.find()
        res.status(200).json({
            status: true,
            data: results,
            message: "News Of List"
        })
    } catch (error) {
        if (error) {
            console.log('errors', error)
            next(error)
        }
    }
}
/* News List End*/


/* News Store Start*/
const Store = async (req, res, next) => {
    try {
        const { title, description, image } = req.body
        const newNews = new News({
            title, description, image,
        })
        await newNews.save()
        res.status(200).json({
            status: true,
            message: "Store News Successfully...!"
        })
    } catch (error) {
        if (error) {
            console.log('errors', error)
            next(error)
        }
    }
}
/* News Store End*/


/* News Show Start*/
const Show = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await News.findById(id)
        res.status(200).json({
            status: true,
            data: result,
            message: "Show News Successfully...!"
        })
    } catch (error) {
        if (error) {
            console.log('errors', error)
            next(error)
        }
    }
}
/* News Show End*/


/* News Update Start*/
const Update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, description, image } = req.body
        await News.findByIdAndUpdate(
            id,{
                $set:{
                    title,
                    description,
                    image
                }
            }
        )
        res.status(200).json({
            status: true,
            message: "Update News Successfully...!"
        })
    } catch (error) {
        if (error) {
            console.log('errors', error)
            next(error)
        }
    }
}
/* News Update End*/

/* News Delete End*/
const Destroy = async(req, res, next) => {
    try {
        const {id } = req.params
        await News.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: "Deleted News Successfully...!"
        })
    } catch (error) {
        if (error) {
            console.log('errors', error)
            next(error)
        }
    }
}
/* News Delete End*/



module.exports = {
    Index,
    Store,
    Show,
    Update,
    Destroy
}

