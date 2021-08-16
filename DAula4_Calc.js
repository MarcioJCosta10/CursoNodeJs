var SomaFunc = require("./DAula4_soma");
var SubFunc = require("./DAula4_subtracao");
var DivFunc = require("./DAula4_divisao");
var MultFunc = require("./DAula4_multiplicacao");

// Vamos entender como funciona os módulos no Node
// Criei as funções em arquivos separados
/*
function soma(a,b){
    return a+b;
}
function subtracao(a,b){
    return a-b;
}
function multiplicacao(a,b){
    return a*b;
}
function divisao(a,b){
    return a/b;
}
*/

//PARA usar os módulos uso a função REQUIRE e vou atribuir a uma variável
// Como está na pasta do meu projeto vou usar o ./
//var SomaFunc = require("./DAula4_soma")

console.log(SomaFunc(1,2));
console.log(SubFunc(5,2));
console.log(DivFunc(9,3));
console.log(MultFunc(3,1));



