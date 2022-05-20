const user = require('../models/user.model')

//list of user
const Index = async(req, res, next) => {
    res.status(200).json({
        status:true,
        message : "ok",
    })
}

//store user




module.exports = {
    Index,
}