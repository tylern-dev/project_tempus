create database tempus;

use tempus;

create table employee(
    id int primary key not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    pay_rate decimal(16,4) not null,
    
)