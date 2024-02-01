import hw0Controller from "@controllers/hw0"
import { Router } from "express"

const hw0Router = Router()
hw0Router.get("/:bla/:blu", hw0Controller.get)

export default hw0Router
