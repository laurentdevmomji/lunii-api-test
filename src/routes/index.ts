import express from 'express';

import PingController from '../controllers/ping.controller';

import ShortUrlRouter from './shorturl.router';
import AnalyticsRouter from './analytics.router';

// import HttpError from '../utils/HttpError';
import HttpUtils from '../utils/HttpUtils'

import ShortUrlController from '../controllers/shorturl.controller';

const router = express.Router();

router.get('/ping', async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

// TODO : create appRouter ?
router.get('/shorturl/:shortUrl', async (req, res) => {
  
  const controller = new ShortUrlController();
  const data = await controller.getShortUrlByShortUrl(req.params.shortUrl);

  if (!data){
    return HttpUtils.sendHttpErrorResponse(res, `No shorturl found with id ${req.params.shortUrl}`, 404);
  } 
  return HttpUtils.sendSuccessResponse(res, data);
});

router.use('/shorturls', ShortUrlRouter);
router.use('/analytics', AnalyticsRouter)

export default router;
