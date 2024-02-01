import { Request, Response } from "express"

async function get(req: Request, res: Response) {
    res.json({ message: "Hello World!" })
}

const rootController = {
    get,
}
export default rootController
