const blog = require('../models/Blog.model')

const Index = async (req, res, next) => {
    try {
       const result = await blog.find()
       res.status(200).json({
           status:200,
           data : result,
           message: "list of blog",
       })
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}

const Store = async (req, res, next) => {
    try {
        
        const { 
            title, 
            description,
            image,
            category
        } = req.body

        const storeBlog = new blog({
            title,
            description,
            image,
            category
        })

        await storeBlog.save()
        res.status(200).json({
            status:true,
            message: "Blog Added Successfully...!"
        })
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}

const Show = async (req, res, next) => {
    try {
        const {id} = req.params
        const result = await blog.findById(id)
        res.status(200).json({
            status:200,
            data: result
        })
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}
module.exports  = {
    Index,
    Store,
    Show
}