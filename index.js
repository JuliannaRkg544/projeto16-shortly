import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRouter from "./src/routes/authRoute.js"
import urlsRouter from "./src/routes/urlsRoute.js"

const server = express()

dotenv.config()

server.use(cors())
server.use(json())
server.use(authRouter)
server.use(urlsRouter)

server.listen(process.env.PORT, ()=>{
    console.log("servidor no ar")
})
