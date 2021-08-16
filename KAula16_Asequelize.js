// Vamos aprender a usar o sequelize
const express = require('express');
const app = express();

app.get("/",function(req, res){
    res.send("Bem-vindo a minha pagina principal!");
})

app.get("/sobre", function(req,res){
    res.send("Essa e a rota da pagina sobre");
})

app.get("/blog", function(req, res){
    res.send("Essa e a rota do meu blog")
})


app.listen(9090,function(){
    console.log("Seridor rodando na porta 9090");
})