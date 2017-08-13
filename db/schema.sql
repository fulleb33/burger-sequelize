CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN NOT NULL, 
    PRIMARY KEY(id)
);