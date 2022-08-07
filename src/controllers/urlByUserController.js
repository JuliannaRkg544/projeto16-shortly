import db from "../../db.js";

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

export async function getTopVisitedUrls(req,res){
    try {
        const getTopVisitedUrls = await db.query(
          `
          SELECT users.id, users.name, COUNT(urls.url) AS "linksCount", SUM(COALESCE(urls.visits, 0)) AS "visitCount"
          FROM users
          LEFT JOIN urls ON users.id = urls."userId"
          GROUP BY users.id
          ORDER BY "visitCount" DESC
          LIMIT 10;
        `
        );
    
        res.status(200).send(getTopVisitedUrls.rows);
        
      } catch (error) {
        console.log(error)
        return res.sendStatus(500)
      }
}