import db from "../../db.js";
import { nanoid } from "nanoid";

export async function postUrl(req,res){
    const {url} = req.body
    const {token} = res.locals
    const shorturl = nanoid()
    console.log("user id do locals ", res.locals)
    try {
        const session = await db.query(`SELECT "userId" FROM sessions WHERE token = $1`, [token])
        if(session.rowCount===0){
            return res.status(401).send("invalid token")
        }
        await db.query(`INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3)`,
        [session.rows[0].userId, url, shorturl])
        res.status(201).send(shorturl)
    } catch (error) { 
        console.log(error)
        return res.sendStatus(500)
    }

}


export async function getUrls(req,res){
    const {id} = req.params
   try {
    const url = await db.query(`SELECT id, "shortUrl", url FROM urls WHERE id = $1`, [id])
    if (url.rowCount===0){
        return res.status(404).send("url not found")
    }
    res.status(200).send(url.rows[0])
   } catch (error) {
    console.log(error)
     return res.sendStatus(500)
   }

}
export async function redirectByUrl(req,res){
    const {shortUrl} = req.params;
    try {
        const verifyShortUrl = await db.query(`SELECT * FROM urls WHERE "shortUrl" = $1`,[shortUrl])
        if (verifyShortUrl.rowCount===0){
            return res.status(404).send("url not found")
        } 
        let updatedVisit = parseInt(verifyShortUrl.rows[0].visits)
        updatedVisit++
        await db.query(`UPDATE urls SET visits = $1 WHERE "shortUrl" = $2`,[updatedVisit,shortUrl] )
        res.redirect(verifyShortUrl.rows[0].url);
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function deleteUrl (req,res){
     const {token} = res.locals
     const {id} = req.params
     
     try {
        const userid = await db.query(`SELECT "userId" FROM sessions WHERE token= $1`, [token])
        if(userid.rowCount===0){
            return res.status(404).send("user not found")
        }
        const verifyShortUrl = await db.query(`SELECT * FROM urls WHERE id = $1`,[id])
        if(verifyShortUrl.rowCount ===0){
            return res.sendStatus(404)
        }
        if(verifyShortUrl.rows[0].userId !== userid.rows[0].userId){
            return res.sendStatus(401)
        }
        await db.query(`DELETE FROM urls WHERE "userId" = $1 AND id =$2`,
        [userid.rows[0].userId, id])
        res.sendStatus(204)
     } catch (error) {
        console.log(error)
        return res.sendStatus(500)
     }

}

export async function getUrlByUsers(req, res){
    const {token} = res.locals;

    try {
        const userSession = await db.query(`SELECT * FROM sessions WHERE token=$1`, [token])
        if (userSession.rowCount===0){
            return res.sendStatus(401)
        }
        const user = await db.query(`SELECT id, name FROM users WHERE id= $1`, [userSession.rows[0].userId])
        const urls = await db.query(`SELECT id, "shortUrl", url, visits as "visitCount"
         FROM urls WHERE "userId" = $1`,[user.rows[0].id])
         let visitCount = 0
         for ( let i=0; i<urls.rows.length; i++){
           visitCount+= parseInt(urls.rows[i].visitCount)
         
         }
        const urlsByUser = {
             id: user.rows[0].id,
             name: user.rows[0].name, 
             visitCount,
             shortenedUrls: urls.rows
        }
        res.status(200).send(urlsByUser)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}