DROP DATABASE IF EXISTS palMatch_db;

CREATE DATABASE palMatch_db;

USE palMatch_db;

CREATE TABLE pal (
	pal_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	pal_name VARCHAR(30),
    pal_pic VARCHAR(255),
    PRIMARY KEY(pal_id)
);

INSERT INTO palMatch_db.pal (pal_name, pal_pic)
VALUES 
("Bob", "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/19782_10155468809760317_1383438144655608382_n.jpg?oh=2e476a35951b7fc380763178fd8e92c8&oe=5B0F58DD");


CREATE TABLE pal_responses (
	pal_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	question_01 INTEGER(1),
    question_02 INTEGER(1),
    question_03 INTEGER(1),
    question_04 INTEGER(1),
    question_05 INTEGER(1),
    question_06 INTEGER(1),
    question_07 INTEGER(1),
    question_08 INTEGER(1),
    question_09 INTEGER(1),
    question_10 INTEGER(1),
    PRIMARY KEY(pal_id)
);

INSERT INTO palMatch_db.pal_responses (question_01, question_02, question_03, question_04, question_05, question_06, question_07, question_08, question_09, question_10)
VALUES 
(3, 1, 4, 3, 3, 5, 3, 5, 2, 1);

SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id;


SELECT * FROM pal;
SELECT * FROM pal_responses;
SELECT question_01, question_02, question_03, question_04, question_05, question_06, question_07, question_08, question_09, question_10 FROM pal_responses;