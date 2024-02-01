import type { NextFunction, Request, Response } from "express"

export default function attachSubmissionId(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    res.setHeader("X-CSE356", process.env.SUBMISSION_ID)
    next()
}
