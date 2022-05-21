import express from 'express';
import ShortUrlController from '../controllers/shorturl.controller';

const router = express.Router();

router.get('/', async (_req, res) => {
  const controller = new ShortUrlController();
  const response = await controller.getShortUrls();
  return res.send(response);
});

router.post('/', async (req, res) => {
  const controller = new ShortUrlController();
  const response = await controller.createShortUrl(req.body);
  return res.send(response);
});

router.get('/:id', async (req, res) => {
  const controller = new ShortUrlController();
  const response = await controller.getShortUrl(req.params.id);
  if (!response){
    res.status(404).send({ message: 'No shorturl found' });
  } 
  return res.send(response);
});

export default router;
