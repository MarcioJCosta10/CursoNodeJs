const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','admin',{host:"localhost",dialect:'mysql'}); 
                                                // Aqui dentro da função Sequelize terá alguns parametros
                                                                    // teste -- nome do banco 
                                                                    // root  -- Usuário do banco
                                                                    // admin  -- senha de conexão 
                                                                    // {host onde está o banco, dialect: tipo de banco
                                                                    // }  -- Objeto JSON    

// Para testar se a conexão funcionou vamos usar a função authenticate()
// Para enviar uma mensagem de erro ou sucesso vamos usar a função .then() e .catch()
// .then() função especial de callback quando um evento acontece
// Caso sequelize.authenticate() retornar que conseguiu se conectar será chamado .then()
// Caso sequelize.authenticate() retonar que não consegiu chamará .catch() 
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("Falha ao se conectar ao banco"+ erro);
})
