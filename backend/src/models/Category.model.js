const { Schema, model } = require("mongoose")

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    statusKey: {
        type: String,
        required: true,
        trim: true,

    }
}, {
    timestamps: true
})


const category = model("Category", categorySchema)
module.exports = category