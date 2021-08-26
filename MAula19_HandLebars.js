const express = require("express");
const app = express();


const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars({defaultLayout: 'main'})) // o main é o template padrão da aplicação
app.set('view engine', 'handlebars')

//21 Criar uma constante para recebe o model POST aqui nesse arquivo que seria o index.js e vamos manipular o POST debntro desse mesmo arquivo
const Post = require('./models/Post')



// 12 Vamos usar o Body Parser
const bodyParser = require('body-parser');

// Configurar o bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req,res){
    // 29 Agora vamos exibir os dados do banco de dados na nossa página home
    // 29 Assim ele vai retornar todos os dados da tabela_postagens
    // 29 Depos chamamos o .then  para exibir os dados na view
    Post.all().then(function(posts){ //29 o then recebe como parametro da função o posts -- pode ser qualquer nome como parametro
    res.render('home',{posts: posts})// 29dentro do then vamos chamar o res.render
                                                    // Dentro das chaves conseguimos passar qualque dado para o front

                                     // Nossa rota vai renderizar um arquvi chamado home que está dentro da pasta views
    })
    //res.render('home') // Nossa rota vai renderizar um arquvi chamado home que está dentro da pasta views
})
       

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
    //res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
    
    // 22 Agora dentro da nossa rota vou criar o novo Post
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    // 23 Agora vou exibir uma mensagem quando o Post for criado com sucesso
    }).then(function(){
        //res.send("Post Criado com sucesso");
        // 27 vou criar o redirecionamento // 28 testar
        res.redirect('/');
        // 24 Caso tenha alguma falha vou chamar o catch
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
    // 25 agora vou testar enviando uma postagem do formulário e vou abrir o mysql para ver se está na tabela
    // 26 Agora vou criar um redirecionamento na pagina depois para depois de enviar as postagens

})

// 12 Vamos usar o Body Parser - pegar os dados do formulario
// 13 Agora vamos estruturar o banco de dados, precisamos criar o banco via mysql no terminal
// 13 depois vou criar uma pasta para os models e dentro de model db.js

 
 
app.listen(8081,    function(){
    console.log("Servidor rodando na porta 8081");
});