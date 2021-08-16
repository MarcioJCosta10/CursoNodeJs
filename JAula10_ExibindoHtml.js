// vamos aprender como renderizar arquivos html nas nossas rotas

const express = require('express');
const app = express();

// Vamos usar a função sendFile para mandar arquivo para quem acessar essa rota
// vamos usar a variável __dirname para dizer que o arquivo está no diretório 
// da nossa aplicação, retorna o diretório raiz da aplicação;

app.get("/",function(req,res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");

}); 

app.listen(8090, function(){
    console.log("Servidor rodando na porta 8090");
});