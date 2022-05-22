class HttpUtils {
    

    static sendSuccessResponse(res: any, data: any, code = 200 ) {
        // console.log('[HttpUtils.sendSuccessResponse]:', data);
        res.status(code).json(data);
    }

    static sendHttpErrorResponse(res: any, errorMessage: string, code: number) {
        // console.log('[HttpUtils.sendHttpErrorResponse]:', errorMessage, code);
        res.status(code).send({
            error: {
                statusCode: code,
                message: errorMessage,
            },
        });
    }

    static sendErrorResponse(res: any, errorMessage: string, code = 500) {
        // console.log('[HttpUtils.sendErrorResponse]:', errorMessage);
        res.status(code).send({
            error: {
                statusCode: 500,
                message: errorMessage,
            },
        });
    }
}

export default HttpUtils;