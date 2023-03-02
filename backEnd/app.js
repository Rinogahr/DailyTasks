const express = require('express');
const usuarioRouters = require('./src/routers/Usuario-Routers');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = '3333';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(usuarioRouters);


app.listen(port, function(){
    console.log(`Servidor icializado com sucesso! acesse -> http://localhost:${port}`);
});