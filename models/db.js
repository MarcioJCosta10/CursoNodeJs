// // 13 Agora voui cofigurar o acesso ao banco de dados           
const Sequelize = require('sequelize');
                             // nome do banco //local  //senha  // local           //linguagem
const sequelize = new Sequelize('postapp','root','admin', {host: "localhost", dialect: 'mysql'})

//14 vou exportar o db.js
module.exports = {
    // Aqui dentro desse objeto estou exportando essas duas variáveis
    Sequelize: Sequelize,
    sequelize: sequelize

}

//15 Agora vou criar uma pasta com o nome Post que será nosso model que terá toda a estrutura da tabela de postagem
// 15 Boa prática é o nome do arquivo estar no singular e com a Primeira letra em maiúsculo
