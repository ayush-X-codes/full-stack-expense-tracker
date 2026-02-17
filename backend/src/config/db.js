import pg from 'pg'
import { configDotenv } from "dotenv";
configDotenv()
const { Pool} = pg
const connectionString = process.env.DB_PASSWORD
console.log(typeof connectionString)
const pool = new Pool({
  connectionString,
})

export {pool}