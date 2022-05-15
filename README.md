![img](src/assets/instagram.jpg)
## API de download de Reels, IGTV , Videos , Photos e Stories

Esta API retorna uma url com o endereço de download de um video, imagem ou story do instagram, a documentação está disponíel nesse [link](https://rapidapi.com/maatootz/api/instagram-downloader-download-instagram-videos-stories/), e possível criar uma api_key e os parâmetros necessários no header. 

## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  npm install 
  npm run start
```

## Documentação da API
#### Parâmetros do header

| Parâmetro   | Tipo       | Descrição                                             |
| :---------- | :--------- | :---------------------------------------------------- |
| `Accept`          | `string` | **Obrigatório**. application/json instagram |
| `X-RapidAPI-Host` | `string` | **Obrigatório**. instagram-downloader-download-instagram-videos-stories.p.rapidapi.com        |
| `X-RapidAPI-Key`  | `string` | **Obrigatório**. sua ${api_key}             |

#### Rota para obter o endereço de download de videos, imagens e stories
```
  GET http://localhost:7000/instagram/downloader?url=${url}
```
| Parâmetro   | Tipo       | Descrição                                             |
| :---------- | :--------- | :---------------------------------------------------- |
| `url` | `string` | **Obrigatório**. Link do vídeo, imagem ou storie do instagram |
#### Retorna um JSON

```
  Deve retornar um JSON com os dados dos gifs como no exemplo abaixo.
  {
    "media": "https://scontent.cdninstagram.com/v/t50.2886-16/120821648_335034537771727_3355215591098276658_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=orLPgx6xj44AX-bxvYp&edm=AJBgZrYBAAAA&vs=18074668870225736_223879879&_nc_vs=HBksFQAYJEdKQ1hNd2ZQZ3B4T3RqQUJBRExiUTZ6TkhwQXVia1lMQUFBRhUAAsgBABUAGCRHTjZkTXdkbXlZWnM0V2dGQUtIM29wWThjSm9CYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmkJrHz5i0m0AVAigCQzMsF0At3bItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=628377ED&oh=00_AT-mdboApJHJ9MhzEhtxlqXI1C26Old31xt9kE6doN12Ow&_nc_sid=78c662",
    "Type": "Post-Video",
    "API": "backup"
}
````
## Stack utilizada

**Back-end:** Node, Express, Axios

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)