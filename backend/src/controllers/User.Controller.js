const user = require('../models/user.model')
const jwt = require("jsonwebtoken")

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


const Login = async ( req, res, next ) => {

    try {
        const { email, password } = req.body

        /* Account find using phone */
        const account = await user.findOne({ email })
        if (!account) {
            return res.status(404).json({
                status: false,
                message: "Invalid email or password."
            })
        }

        /* Compare with password */
        // const result = await bcrypt.compare(password, account.password)
        // if (!result) {
        //     return res.status(404).json({
        //         status: false,
        //         message: "Invalid email or password."
        //     })
        // }

        /* Generate JWT token */
        const token = await jwt.sign(
            {
                id: account._id,
                name: account.name,
                role: account.role,
                permissions: account.permissions,
            }, process.env.JWT_SECRET, { expiresIn: '1d' }
        )

        return res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next()
        }
    }
}

const logdinUser = async (req, res, next) => {
    

    try {
         // decode token
        const splitToken = await req.headers.authorization.split(' ')[1]
        const decode = await jwt.verify(splitToken, process.env.JWT_SECRET)
        const user_id = decode.id
        const result = await user.findById(user_id)
        console.log(result)
        return res.status(200).json({
            status : 200,
            message: "test",
            data : result
        })
    } catch (error) {
        console.log('error', error)
        next(error)
    }
}



module.exports = {
    Index,
    Store,
    Login,
    logdinUser
}