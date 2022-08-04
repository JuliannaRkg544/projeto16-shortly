import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const {Pool} = pg;

const user = 'postgres'
const password = 'postgres'
const host = 'localhost'
const port = 5432
const database = 'shortly' 


// if (process.env.MODE === "PROD") {
//     databaseConfig.ssl = {
//       rejectUnauthorized: false,
//     };
//   }

  const db = new Pool({
    user,
    password,
    host,
    port,
    database
  });

  export default db;