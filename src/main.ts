import {default as express} from "express"
import {default as morgan} from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.listen(8080, () => {
  console.log("Server running on port 8080")
})
