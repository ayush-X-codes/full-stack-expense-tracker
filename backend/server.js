import app from "./src/app.js";
import { configDotenv } from "dotenv";
configDotenv()

const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

