
CREATE DATABASE sistemaDeCadastro;
show DATABASE;

create table usuarios(
    nome varchar(50),
    email varchar(100),
    idade int
);

insert into usuarios(nome,email,idade) values(
    "Maria Clara","maria@teste.com", 8

);

-- Selecionar dados
select * from usuarios;
select * from usuarios where < 10;
select * from usuarios where nome = "Marcio Costa"
select * from usuarios where idade >= 18;

-- Deletar dados
 delete from usuarios where nome = "Maria Clara";

-- Atualizar dados
update usuarios set nome = "Marcio" where nome = "Marcio Costa";
