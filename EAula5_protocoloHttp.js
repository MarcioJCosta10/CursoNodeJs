// Vamos importar o módulo http e por ser parte do núcleo do node não precisa dize o nome do diretório
// var fs = require('fs'); -- Esse módulo é para trabalhar com arquivos, leitura, escrita, delete
var http = require('http');

// Função para abrir um servidor Http // .listen() função para abrir a porta para o servidor
http.createServer(function(req,res){ // Como passar uma mensagem? 
                                  // dentro da função createServer() vamos colocar uma função de callBack que receber dois parametros req e res
res.end("Ola voce acessou o servidor!");
}).listen(9000);

console.log("O servidor esta rodando!"); //Para fechar o servidor ctrl+c

