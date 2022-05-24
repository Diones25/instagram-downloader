import { Router } from 'express';
import instagramController from'../controllers/instagramController.js';

const router = Router();

router.get('/instagram/downloader', instagramController.getInstagramDownloader);

export default router;