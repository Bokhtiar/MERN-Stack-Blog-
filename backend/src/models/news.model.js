const { Schema, model } = require('mongoose')

const newSchema = new Schema({
    title:{
        type: String,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    statusKey:{
        type:String,
        trim:true,
        default:0
    }
},{
    timestamps:true
})
const News = model("news", newSchema)
module.exports = News