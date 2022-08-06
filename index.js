import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRouter from "./src/routes/authRoute.js"
import urlsRouter from "./src/routes/urlsRoute.js"
import urlsByUserRouter from "./src/routes/urlByUser.js"


const server = express()

dotenv.config()

server.use(cors())
server.use(json())
server.use(authRouter)
server.use(urlsRouter)
server.use(urlsByUserRouter)

server.listen(process.env.PORT, ()=>{
    console.log("servidor no ar")
})
