import db from "../../db.js";


export async function signup(req,res){
    const user = req.body
    try {
        const verifyUser =  await db.query(`SELECT * FROM users WHERE email = $1`, [user.email])
        if(verifyUser.rowCount>0){
           return res.status(409).send("email already in use")
            
        }
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
        [user.name, user.email, user.password])
         res.sendStatus(201)
    
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
   
}

export async function signin(req,res){

}

