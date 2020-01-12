CREATE DATABASE packinglist_db;

USE packinglist_db;

CREATE TABLE items (
    id int NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(225) NOT NULL,
    packed BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);