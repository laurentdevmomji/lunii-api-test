import express from 'express';
import ShortUrlController from '../controllers/shorturl.controller';

import HttpError from '../utils/HttpError';
import HttpUtils from '../utils/HttpUtils'

const router = express.Router();

router.get('/shorturls', async (req, res) => {
  try {
    const controller = new ShortUrlController();
    const data = await controller.getShortUrlAnalytics();
    
    return HttpUtils.sendSuccessResponse(res, data)
  }
  catch(error: any){
    if (error instanceof HttpError) {
      return HttpUtils.sendHttpErrorResponse(res, error.message, error.statusCode)
    }
    return HttpUtils.sendErrorResponse(res, error.message)
  }
  
});

export default router;
