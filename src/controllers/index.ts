import type { Request, Response } from "express"

async function get(req: Request, res: Response) {
    res.sendStatus(200)
}

const rootController = {
    get,
}
export default rootController
