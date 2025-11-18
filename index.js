import express  from "express"
import router from "./routes/routes.js"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.use("/api/users", router)

app.listen(port, () => {
    console.log("server running!!")
})