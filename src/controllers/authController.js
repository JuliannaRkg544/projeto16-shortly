import db from "../../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";


export async function signup(req,res){
    const user = req.body
    try {
        const verifyUser =  await db.query(`SELECT * FROM users WHERE email = $1`, [user.email])
        if(verifyUser.rowCount>0){
           return res.status(409).send("email already in use")
            
        }
        const passwordHash = bcrypt.hashSync(user.password, 10);
        await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
        [user.name, user.email, passwordHash])
         res.sendStatus(201)
    
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        return
    }
   
}

export async function signin(req,res){
  const user = req.body
  try {
    const verifyUser = await db.query(`SELECT * FROM users WHERE email = $1`,[user.email])
    if (verifyUser.rowCount==0){
        return res.status(401).send("email not found")
    }
    const token = uuid();
   if(!(bcrypt.compareSync(user.password, verifyUser.rows[0].password))){
    return res.status(401).send("invalid password")
   }
   await db.query(`INSERT INTO sessions ("userId",token) VALUES ($1, $2)`, [verifyUser.rows[0].id,token])
   const userInfo = {token,
    name: verifyUser.rows[0].name
  }
   res.status(200).send(userInfo)
    
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
    return
  }
}

