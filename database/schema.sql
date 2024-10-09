-- create database "typing_test"
CREATE DATABASE typing_test;

-- use the database "typing_test"
USE typing_test;


-- create table "highscores"
CREATE TABLE highscores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    highest_wpm INT NOT NULL
);

-- insert the value 0 inside the table "highscores"  [initial data]
INSERT INTO highscores (highest_wpm) VALUES (0);