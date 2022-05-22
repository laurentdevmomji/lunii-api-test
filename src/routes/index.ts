import express from 'express';

import PingController from '../controllers/ping.controller';

import ShortUrlRouter from './shorturl.router';
import AnalyticsRouter from './analytics.router';

// import HttpError from '../utils/HttpError';
import HttpUtils from '../utils/HttpUtils'

import ShortUrlController from '../controllers/shorturl.controller';
import { IShortUrlPayload } from '../repositories/shorturl.repository';

const router = express.Router();

router.get('/ping', async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

// TODO : create appRouter ?
router.get('/shorturl/:shortUrl', async (req, res) => {
  
  const controller = new ShortUrlController();
  const shortUrl = await controller.getShortUrlByShortUrl(req.params.shortUrl);

  if (!shortUrl){
    return HttpUtils.sendHttpErrorResponse(res, `No shorturl found with id ${req.params.shortUrl}`, 404);
  } 

  // increment nbClicks
  const body: IShortUrlPayload = {
    nbClicks: shortUrl.nbClicks + 1,
    originalUrl: shortUrl.originalUrl,
    shortUrl: shortUrl.shortUrl,
  }

  const patchedShortUrl = await controller.patchShortUrl(Number(shortUrl.id), body);
  if (!patchedShortUrl){
    return HttpUtils.sendHttpErrorResponse(res, `A problem occured during patchedShortUrl ...`, 500);
  } 

  // dev
  // return HttpUtils.sendSuccessResponse(res, patchedShortUrl);

  // redirect to originalUrl ...
  res.redirect(302, patchedShortUrl.originalUrl);
});

router.use('/shorturls', ShortUrlRouter);
router.use('/analytics', AnalyticsRouter)

export default router;
