class ResponseError extends Error {
    constructor(opts) {
        let message = opts.message || `An error occured`
        if (opts.body) {
            if (opts.body.error_message) message = opts.body.error_message
            else if (opts.body.meta && opts.body.meta.error_message)
                message = opts.body.meta.error_message
        }
        super(message)
        this.opts = opts
        Error.captureStackTrace(this, ResponseError)
    }
}

exports.ResponseError = ResponseError
