import express from 'express';

import ShortUrlController from '../controllers/shorturl.controller';

import HttpError from '../utils/HttpError';
import HttpUtils from '../utils/HttpUtils'

const router = express.Router();

router.get('/', async (_req, res) => {
  const controller = new ShortUrlController();
  const response = await controller.getShortUrls();
  return res.send(response);
});

router.post('/', async (req, res) => {
  try {
    const controller = new ShortUrlController();
    const response = await controller.createShortUrl(req.body);
    return res.send(response);
  }
  catch(error: any){
    if (error instanceof HttpError) {
      return HttpUtils.sendHttpErrorResponse(res, error.message, error.statusCode)
    }
    return HttpUtils.sendErrorResponse(res, error.message)
  }
});

router.get('/:id', async (req, res) => {
  const controller = new ShortUrlController();
  const data = await controller.getShortUrl(req.params.id);
  if (!data){
    return HttpUtils.sendHttpErrorResponse(res, `No shorturl found with id ${req.params.id}`, 404)
  } 
  return HttpUtils.sendSuccessResponse(res, data)
});


export default router;
