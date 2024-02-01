import hw0Controller from "@controllers/hw0"
import attachSubmissionId from "@middlewares/attach-submission-id"
import { Router } from "express"

const hw0Router = Router()
hw0Router.get("/:bla/:blu", [attachSubmissionId], hw0Controller.get)

export default hw0Router
