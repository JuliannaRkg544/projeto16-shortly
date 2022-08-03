import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"

const server = express()

dotenv.config()

server.use(cors())
server.use(json())

server.listen(process.env.PORT, ()=>{
    console.log("servidor no ar")
})
