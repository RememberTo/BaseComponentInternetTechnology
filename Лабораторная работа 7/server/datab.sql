create table users (
   id serial primary key,
   name varchar(255),
   Email varchar(255),
   Pas varchar(255)
);

create table share(
id serial primary key,
name varchar(255),
price integer,
txt text);
Insert into share(name, price, txt) values ('Microsoft', 260, 'Hello its Ms'), ('Apple', 134, 'Hello its Al'), ('Qualcomm', 138, 'Hello its QM'), ('Adobe', 520, 'Hello its AD');

