const express = require('express');
const cors = require('cors');
const router = require('./routes/router.js');
const chalk = require('chalk');

const app = express();
const port = 7000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(chalk.bgGreenBright.black(`Servidor rodando no endereço: http://localhost:${port}`));
});