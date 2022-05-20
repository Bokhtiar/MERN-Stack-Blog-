const user = require('../models/user.model')

const Login = async (req, res, next)=> {
    try {
        const {
            email,
            password
        } = req.body

        if (!email || !password) {
            return res.status(400).json({
              message: "Username or Password not present",
            })
        }
        const loginUser = await user.findOne({ email, password })
        if(loginUser){
            res.status(200).json({
                status: true, 
                data: loginUser,
                message: "Login Successfully...!"
            })
        }else{
            res.status(500).json({
                status: false, 
                message: "Enter Your Valid Password and E-mail...!"
            })
        }
        
       
        
    } catch (error) {
        if(error){
            console.log(error)
        } 
    }
}

module.exports = {
    Login,
}
