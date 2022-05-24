import api from '../service/api.js';

const getInstagramDownloader = async (req, res) => {
    const url = req.query["url"];

    await api.get(`https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=${url}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(404).json({ message: "Link não encontrado!" });
    });
}

export default {
    getInstagramDownloader
}