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
("Bill", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1280px-Hausziege_04.jpg"),
("Champ", "http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg"),
("Steve", "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"),
("Popo", "https://www.takemefishing.org/tmf/assets/images/fish/african-pompano-464x170.png");


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
(2, 2, 4, 4, 2, 2, 2, 1, 2, 4),
(1, 2, 5, 3, 4, 2, 5, 1, 4, 1),
(3, 2, 1, 2, 2, 1, 2, 4, 1, 1),
(3, 4, 1, 5, 4, 1, 5, 4, 3, 4);

SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id;


SELECT * FROM pal;
SELECT * FROM pal_responses;
SELECT question_01, question_02, question_03, question_04, question_05, question_06, question_07, question_08, question_09, question_10 FROM pal_responses;