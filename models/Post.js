// 16  vou pegar o arquivo db.js (./ que está na mesma pasta) e guardar em uma const
const db = require('./db.js');

//17 Definir um novo Post
                                  //nome da tabela  
const Post = db.sequelize.define('tabela_postagens', {
    //18 Agora vou definir minha tabela
    // Campo Titulo
    Titulo: {
        type: db.Sequelize.STRING,
    },
    // Campo Conteudo
    Conteudo:{
        type: db.Sequelize.TEXT
    }

});

//19 Agora vamos ver se está funcionando e se vai gerar a tabela, apos gerar apague ou comente a linha abaixo:
//Post.sync({force: true})

//20 agora vou exportar o modeles Post para acessar em outros arquivos
module.exports = Post;

