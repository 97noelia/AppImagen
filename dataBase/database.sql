create database dbUsuarios;
use dbUsuarios;
create table Usuarios(
    id int (3) not null auto_increment primary key,
    nombre varchar (50),
    imagen varchar (200)
);