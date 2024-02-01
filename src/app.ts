import express from "express"
import logger from "morgan"
import path from "path"

// load .env variables
import "dotenv/config"

// middleware
import generalErrorHandler from "./middlewares/general-error-handler"
import notFoundHandler from "./middlewares/not-found-handler"

// router
import rootRouter from "./routes"

// server
export const app = express()
app.set("port", process.env.PORT || 3000)

app.use(express.json())
app.use(logger("dev"))

app.use(express.static(path.join(__dirname, "../public")))
app.use("/", rootRouter)

app.use(notFoundHandler)
app.use(generalErrorHandler)
