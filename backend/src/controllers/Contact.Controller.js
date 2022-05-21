const Contact = require('../models/Contact.model')

const Store = async (req, res, next) => {
    try {
        const {
            name,
            email,
            message,
        } = req.body

        const newContact = new Contact({
            name,
            email,
            message
        })

        await newContact.save()
        res.status(200).json({
            status:true,
            message: "Contact store successfully...!"
        })
    } catch (error) {
        if(error){
            console.log('error', error)
            next(error)
        }
    }
}

module.exports = {
    Store,
}