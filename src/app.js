import express from "express"
import ejs from "ejs"
import client from "./database"
import { config } from "./config"
import { router } from "./router"
const app = express(express.urlencoded({ extended: true }))

try {
	client.connect()
	console.log("Connected to Postgres!")
} catch (error) {
	console.log(`Something went wrong ${error}`)
}

app.use(router)
app.set("views", "./src/views")
app.set("view engine", "ejs")

app.listen(config.port, async () => {
	console.log(`Server is running on http://${config.host}:${config.port}`)
})
