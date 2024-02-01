import type { Request, Response } from "express"

async function get(req: Request, res: Response) {
    res.sendFile("hw0.html", { root: "html" })
}

const hw0Controller = {
    get
}

export default hw0Controller
