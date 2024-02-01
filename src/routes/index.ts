import rootController from "@controllers/index"
import { Router } from "express"

const rootRouter = Router()
rootRouter.get("/", rootController.get)

export default rootRouter
