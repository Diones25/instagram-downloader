const axios = require('axios');

const api = axios.create({
    headers: {
        Accept: "application/json",
        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
        'X-RapidAPI-Key': '657511860bmshc64d95031b8d75cp1a1e0bjsn725a1c9d6249'
    }
});

module.exports = api;