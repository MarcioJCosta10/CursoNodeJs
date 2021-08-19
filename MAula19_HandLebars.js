const express = require('express');
const app = express();


/* 1 Vamos usar o handLebars que oferece muitas funiconalidade para o html:
     Podemos usar estruturas condicionais dentro do html
     Podemos usar estruturas de repetição dentro do html
     Podemos exibir dados que vem do beckend no nosso arquivo html
     Podemos definir uma variável no JS e ter acesso a ela lá no html
*/


// 2 Criar uma variável para receber o handlebars
const handlebars = require('express-handlebars');

// 3 Temos que configurar o handlebars, tenho que dizer para o express que queremos usar o handlebars como template engines
// Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'})) // o main é o template padrão da aplicação
        app.set('view engine', 'handlebars')
        // 6 Agora voui cofigurar o acesso ao banco de dados dentro do meu arquivo atual
            const Sequelize = require('sequelize');
            const sequelize = new Sequelize('teste','root','admin',{host: "localhost", dialect: 'mysql'})


// 4 Agora precisamos criar uma pasta chamada views 
// 7 Começando a criar um formulário:
// Vamos criar uma rota get
app.get('/cad',(req,res)=>{
    res.send("Rota de cadastro de Posts!")
})        

app.listen(9070,()=>{
    console.log("Servidor rodando na porta 9070");
})