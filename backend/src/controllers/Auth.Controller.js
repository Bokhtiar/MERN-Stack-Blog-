const user = require('../models/user.model')

const Login = async (req, res, next)=> {
    try {
        const {
            email,
            password
        } = req.body

        const AuthLogin = await user.where('email', email).where('password', password).find()
        res.status(200).json({
            status: true,
            data: AuthLogin,
            message: "Login Successfully...!"
        })
       
        
    } catch (error) {
        if(error){
            console.log(error)
        } 
    }
}

module.exports = {
    Login,
}
