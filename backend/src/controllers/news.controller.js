const News = require('../models/news.model')

/* News List Start*/
 const Index = async (req, res, next) => {
        try {
            const results = await News.find()
            res.status(200).json({
                status:true,
                data: results,
                message: "News Of List"
            })
        } catch (error) {
            if(error){
                console.log('errors', error)
                next(error)
            }
        }
    }
/* News List End*/


/* News List Start*/
 const Store = async (req, res, next) => {
    try {
        const { title, description, image } = req.body
        const newNews = new News({
            title, description, image,
        })
        await newNews.save()
        res.status(200).json({
            status:true,
            message: "Store News Successfully...!"
        })
    } catch (error) {
        if(error){
            console.log('errors', error)
            next(error)
        }
    }
}
/* News List End*/

module.exports = {
    Index,
    Store
}

