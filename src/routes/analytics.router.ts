import express from 'express';
import ShortUrlController from '../controllers/shorturl.controller';

const router = express.Router();

router.get('/shorturls', async (req, res) => {
  try {
    const controller = new ShortUrlController();
    const response = await controller.getShortUrlAnalytics();
     
    return res.send(response);
  }
  catch(error){
    console.error(error);
    return res.send(error);
  }
  
});

export default router;
