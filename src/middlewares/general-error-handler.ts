import type { NextFunction, Request, Response } from "express"

declare type WebError = Error & { status?: number }
export default function generalErrorHandler(
    err: WebError,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const status = err.status || 500
    res.status(status).json({
        status,
        type: err.name || "Unknown",
        message: err.message || "No Message",
        timestamp: new Date(),
    })
}
