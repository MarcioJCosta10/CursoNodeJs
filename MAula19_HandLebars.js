const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars({defaultLayout: 'main'})) // o main é o template padrão da aplicação
app.set('view engine', 'handlebars')


// 12 Vamos usar o Body Parser
const bodyParser = require('body-parser');

// Configurar o bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
       

/* 1 Vamos usar o handLebars que oferece muitas funiconalidade para o html:
     Podemos usar estruturas condicionais dentro do html
     Podemos usar estruturas de repetição dentro do html
     Podemos exibir dados que vem do beckend no nosso arquivo html
     Podemos definir uma variável no JS e ter acesso a ela lá no html
*/


// 2 Criar uma variável para receber o handlebars
//const handlebars = require('express-handlebars');

// 3 Temos que configurar o handlebars, tenho que dizer para o express que queremos usar o handlebars como template engines
// Config
    //Template Engine
        // app.engine('handlebars', handlebars({defaultLayout: 'main'})) // o main é o template padrão da aplicação
        // app.set('view engine', 'handlebars')
        

// 4 Agora precisamos criar uma pasta chamada views 
// 7 Começando a criar um formulário:
// Vamos criar uma rota get
app.get('/cad',function(req,res){
                                    //res.send("Rota de cadastro de Posts!")
                                     //10 colocando o formulario na rota
    res.render('formulario');        // Esse formulario é o nome do arquivo
})       
 
//8 Agora vou na pasta views handlebars vou criar o arquivo formulário


// 11 Criando uma nova rota como vamos usar o post precisamos mudar para app.post
app.post('/adicionar',(req, res)=>{
    //req.body.conteudo   // pegar os dados do formulario
    
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);

})

// 12 Vamos usar o Body Parser - pegar os dados do formulario
// 13 Agora vamos estruturar o banco de dados, precisamos criar o banco via mysql no terminal
// 13 depois vou criar uma pasta para os models e dentro de model db.js






 
app.listen(9070,function(){
    console.log("Servidor rodando na porta 9070");
});