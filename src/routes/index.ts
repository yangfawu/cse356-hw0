import rootController from "@controllers/index"
import { Router } from "express"
import hw0Router from "./hw0"

const rootRouter = Router()
rootRouter.get("/", rootController.get)
rootRouter.use("/hw0", hw0Router)

export default rootRouter
