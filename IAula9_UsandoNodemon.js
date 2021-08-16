// Vamos aprender a usar o nodemon para não automatizar o processo de inicializar o servidor a cada aleteração 

const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Seja bem vindo ao meu site app!");
})


app.get("/ola/:cargo/:nome/:cor",function(req,res){
    res.send("<h1>Ola " + req.params.nome+"</h1>"+"<h2> Seu cargo e " + req.params.cargo + "</h2>"+"<h3> sua cor favorita é "+ req.params.cor + "</h3>")
})


app.listen(9000,function(){
    console.log("Servidor rodando na porta 9000");

});


