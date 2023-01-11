const express = require('express');
const routersPessoas = require('./src/routers/pessoaRouters');
const app = express();
const port = '8080';

app.use(routersPessoas);


app.listen(port, function(){
    console.log(`Servidor icializado com sucesso na porta ${port}, acesse -> http://localhost:${port}`);
});