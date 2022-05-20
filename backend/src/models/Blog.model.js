const {Schema , model } = require('mongoose')

const newBlog = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    image:{
        type: String,
        trim: true,
        required: true,
    },
    description:{
        type: String,
        trim: true,
        required: true,
    },
    statusKey: {
        type:String,
        trim:true,
        default:0
    } 
}, {
    timestamps:true
})

const blog = model('blog', newBlog)
module.exports = blog