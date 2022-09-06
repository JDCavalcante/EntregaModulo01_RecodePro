create database DevTur;
create table Cliente(
Nome VARCHAR(40),
Data_Nascimento VARCHAR(30),
Endereco VARCHAR(50),
IdCli integer auto_increment primary key
);

ALTER TABLE Cliente RENAME COLUMN Endereco TO Email;
ALTER TABLE Cliente RENAME COLUMN Data_Nascimento TO idade;
ALTER TABLE Cliente RENAME COLUMN Email TO email;
ALTER TABLE Cliente MODIFY COLUMN IdCli integer auto_increment;

create table Destino (
IdDest INTEGER PRIMARY KEY,
Nome VARCHAR(50)
);

CREATE TABLE Viagem (
Codigo_Viagem INTEGER PRIMARY KEY,
Data DATETIME,
IdCli integer,
IdDest INTEGER,
FOREIGN KEY(IdCli) REFERENCES Cliente
(IdCli),
FOREIGN KEY(IdDest)
REFERENCES Destino
(IdDest)
);

select * from cliente;

drop table Viagem;
