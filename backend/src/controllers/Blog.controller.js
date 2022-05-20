const blog = require('../models/Blog.model')

const Index = async (req, res, next) => {
    res.status(200).json({
        message: 'done',
        status:true
    })
}

const Store = async (req, res, next) => {
    try {
        
        const { 
            title, 
            description,
            image,
        } = req.body

        const storeBlog = new blog({
            title,
            description,
            image
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

module.exports  = {
    Index,
    Store
}