
export function tokenValidation(req, res, next){
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        return res.sendStatus(401)
    } 
    console.log(res.locals)
    res.locals.token = token;
    console.log("token",res.locals)
    next();

}