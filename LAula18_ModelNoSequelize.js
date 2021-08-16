const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','admin',{host:"localhost",dialect:'mysql'}); 
                                              
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("Falha ao se conectar ao banco"+ erro);
})

// Vamos aprender a criar um model que é uma referecia da sua tabela dentro do sequelize
// Nessa aula vamos aprender a criar uma tabela dentro do sequelize aqui no node
//Vamos criar um model de postagem e um de usuários

// Criar o model Postagem
const Postagem = sequelize.define('postagem',{          // Dentro dessa função define temos os parametros:
                                                        // postagem -- nome da tabela
                                                        // {} -- objeto JSON para os valores da tqabela         
titulo:{
    type: Sequelize.STRING                              // Campo título com o tipo varchar -- String é limitado
},
conteudo:{
    type: Sequelize.TEXT                                // Campos conteúdo do tipo TEXT -- TEXT é ilimitado
}
                                                });
// Agora quero gerar esse model no mysql
//Postagem.sync({force:true}) // Essa função vai sincronizar o model com o mysql
                            // force: true é para termos certeza que a conexão será gerada

// Criar o model Usuário
const Usuario = sequelize.define('usuarios',{ // Esse primeiro parametro deve ser sempre no plural
    nome:{
        type:Sequelize.STRING
    },
    Sobrenome:{
        type:Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },

})
// Vamos sincronizar com o banco
// Usuario.sync({force:true}) -- Assim que rodarmos o comando devemos comentar essa linha para não recriar a tabela


// Como inserir dados nos models
// Postagem.create({
//     titulo: "ESSA É O PRIMEIRO TITULO VIA SEQUELIZE",
//     conteudo: "Agora para poder exemplificar o campo conteudo vou digitar esse conteúdo!"
// }) 

Usuario.create({
    nome:"Marcos",
    Sobrenome:"Vella",
    email:"teste@teste.com",
    idade:27
})