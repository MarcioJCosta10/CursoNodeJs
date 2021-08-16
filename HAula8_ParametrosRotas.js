// Vamos falar sobre parametros, que são formas de tornar rotas dinâmicas

const express = require('express');
const app = express();


app.get("/ola/:cargo/:nome/:cor",function(req,res){ // Para criar um parametro coloco depois da rota /:
    res.send("<h1>Ola " + req.params.nome+"</h1>"+"<h2> Seu cargo e " + req.params.cargo + "</h2>"+"<h3> sua cor favorita é "+ req.params.cor + "</h3>"); 
                                                // O parametro req é responsavel por receber dados de uma requisição
   
    // Se tentarmos usar o send mais que uma vez dará erro, só funciona uma vez dentro de uma função em uma rota

    //res.send("<h2> Seu cargo e " + req.params.cargo + "</h2>");  
    //res.send("<h3> sua cor favorita é "+ req.params.cor + "</h3>");                                       
})


app.listen(8092,function(){
    console.log("Servidor rodando na porta 8092");
}); 
 