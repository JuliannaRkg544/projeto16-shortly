import signupSchema from "../schemas/signupSchema.js";
import signinSchema from "../schemas/signinSchema.js";

export function signupMiddleware(req,res,next){
    const user = req.body
    const validateUser = signupSchema.validate(user, {abortEarly: false})
    if (validateUser.error){
        console.log(validateUser.error.details)
        return res.status(422).send(validateUser.error.message)
    }
    next()
}

export function signinMiddleware(req,res,next){
  const user = req.body
  const validateUser = signinSchema.validate(user, {abortEarly: false})
  if (validateUser.error){
    console.log(validateUser.error.details)
    return res.status(422).send(validateUser.error.message)
  }
  next()
}
