import urlSchema from "../schemas/urlSchema.js";

export function urlValidation(req, res, next){
    const url = req.body
    const urlValidate = urlSchema.validate(url)
    if (urlValidate.error){
        return res.status(422).send("invalid url")
    }
    next()
}