const express = require('express');
const usuarioRouters = require('./src/routers/Usuario-Routers');
const app = express();
<<<<<<< HEAD
const bodyParser = require("body-parser");
const cors = require("cors");
=======


const port = '8080';
>>>>>>> 3d41d776001a1f9b1e11d0d86aed841625813fc1

const port = '3333';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(usuarioRouters);



app.listen(port, function(){
    console.log(`Servidor icializado com sucesso! acesse -> http://localhost:${port}`);
});