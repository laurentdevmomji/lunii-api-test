
class HttpError extends Error {
    date: Date;
    statusCode: number;
    constructor(statusCode = 500, message = '', ...params: any) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpError);
        }
        this.name = 'HttpError';
        this.statusCode = statusCode;
        this.message = message;
        this.date = new Date();
    }
}

export default HttpError;
