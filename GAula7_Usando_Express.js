// Vamos carregar o módulo express;
// O express é um framework orientado a rotas

const express = require("express"); // Esse módulo retorna uma função que cria o express;
const app = express();              // Essa variável vai receber essa função;
                                  // Essa função cria uma cópia do frameWork inteiro para dentro da variável app;
                                  // Então tudo que eu for usar do express será apartir da variável app;
                                  // vamos tranformar as variáveis em constante  para evitar sobrescrita

// O que devo fazer para abrir um servidor com express?                                  
//app.listen(8090); // Devo passar a porta para a função linsten onde vou rodar meu servidor
                  // Ela dever ser a última linha da aplicação  
  
// Como colocar uma mensagem servidor rodando?
// Devemos passar uma função de callBack, é uma função que será executada sempre que algum evento acontece, 
// dentro do listen()

// Como definir uma rota?
app.get("/",function(req,res){
    res.send("Ola seja bem vindo ao meu app!");

})

// Como criar um caminho para meu site, por exemplo: sobre?
app.get("/sobre",function(req, res){
    res.send("Minha pagina sobre!")
})
// Aqui vou criar mais uma rota
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!")
})

app.listen(8090, function(){
    console.log("O servidor rodando na url: http://localhost:8090");
});                  























