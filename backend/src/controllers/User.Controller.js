const user = require('../models/user.model')

//list of user
const Index = async(req, res, next) => {
    try {
        const results = await user.find()

        res.status(200).json({
            status:true,
            data: results,
            message: "list of users"
        })
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}

//store user
const Store = async (req, res, next) => {
    try {
        const {
            name,
            email,
            password,
            role
        } = req.body

        const newUser = new user({
            name,
            email,
            password,
            role
        })

        await newUser.save()
        res.status(200).json({
            status:true,
            message: "Login Successfully"
        })

    } catch (error) {
        if (error) {
            console.log('error', error)
            next(error)
        }
    }
}


module.exports = {
    Index,
    Store
}