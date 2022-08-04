import signupSchema from "../schemas/signupSchema.js";

export function signupMiddleware(req,res,next){
    const user = req.body
    const validateUser = signupSchema.validate(user)
    if (validateUser.error){
        console.log(validateUser.error.details)
        return res.status(422).send("invalid information")
    }
    next()
}

export function signinMiddleware(req,res,next){
    
}
