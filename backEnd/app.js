require("dotenv").config();
const express = require('express');
const Routers = require('./src/routers/routers');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.DAILY_TASKS_NODE_PORT;
const host = process.env.DAILY_TASKS_NODE_HOST;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Routers);



app.listen(port, function(){
    console.log(`Servidor icializado com sucesso! acesse -> ${host}${port}`);
});