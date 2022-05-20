const category = require('../models/Category.model')

// list of category 
const Index = async(req, res, next) => {
    try {
        const result = await category.find()
        res.status(200).json({
            status: true,
            data: result,
            message: "list of category",
        }) 
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}

// category store 
const Store = async (req, res, next) => {
    try {
        const {
            name,
            statusKey
        } = req.body

        const newCat = new category({
            name,
            statusKey
        })
        await newCat.save()
        res.status(200).json({
            status:true,
            message: "added successfully..!"
        })
    } catch (error) {
        if(error){
            console.log('errors', error)
            next(error)
        }
    }
}

const Show = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await category.findById(id)
        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        if(error){
            console.log('errors', error)
            next(error)
        }
    }
}

const Update = async (req, res, next) => {
    try {
        const {id} = req.params
        const { 
            name,
            statusKey
        } = req.body

        await category.findByIdAndUpdate(
            id,
            {
                $set:{
                    name,
                    statusKey
                }
            }
        )

        res.status(200).json({
            status:true,
            message: "updated successfully...!"
        })
        
    } catch (error) {
        if(error){
            console.log('errors', error)
            next(error)
        }
    }
}

const Destroy = async (req, res, next) => {
    try {
        const {id} = req.params
        await category.findByIdAndDelete(id)
        res.status(200).json({
            status:200,
            message: "Deleted Successfully...!"
        })
    } catch (error) {
        if(error){ 
            console.log('errors', error)
            next(error)
        }
    }
}



module.exports = {
    Index,
    Store,
    Show,
    Update,
    Destroy,
    
}