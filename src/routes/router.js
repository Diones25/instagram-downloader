const { Router } = require('express');
const instagramController = require('../controllers/instagramController.js');

const router = Router();

router.get('/instagram/downloader', instagramController.getInstagramDownloader);

module.exports = router;