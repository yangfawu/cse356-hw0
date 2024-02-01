import type { NextFunction, Request, Response } from "express"
import createError from "http-errors"

export default function notFoundHandler(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    next(createError(404))
}
