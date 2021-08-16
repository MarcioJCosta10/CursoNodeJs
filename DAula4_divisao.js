// Vou criar uma função sem nome e armazenar em uma variavel

var divisao = function (a,b){
    return a/b;
}
// Para transformar esse arquivo em um módulo vou criar o comando:
// Podemos exportar: variáveis com valores, funções; Objetos{}

module.exports = divisao;