import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./routes/authRouter.js"
import transactionRouter from "./routes/transactionRouter.js"
import dashboardRouter from "./routes/dashbordRouter.js"
import { requireAuth } from "./middleware/requireAuth.js"
const app = express()

app.use(express.json());
app.use(cookieParser())


app.use("/api/v1/auth", authRouter)
app.use("/api/v1/transactions", requireAuth, transactionRouter)
app.use("/api/v1/dashboard", requireAuth, dashboardRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



export default app