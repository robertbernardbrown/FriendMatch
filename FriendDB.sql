DROP DATABASE IF EXISTS friendMatch_db;

CREATE DATABASE friendMatch_db;

USE friendMatch_db;

CREATE TABLE friend (
	friend_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	friend_name VARCHAR(30),
    friend_pic VARCHAR(30),
    PRIMARY KEY(friend_id)
);

INSERT INTO friendMatch_db.friend (friend_name, friend_pic)
VALUES 
("Bob", "Pic.jpg");

CREATE TABLE friend_responses (
	friend_id INTEGER(10) AUTO_INCREMENT NOT NULL,
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
    PRIMARY KEY(friend_id)
);

INSERT INTO friendMatch_db.friend_responses (question_01, question_02, question_03, question_04, question_05, question_06, question_07, question_08, question_09, question_10)
VALUES 
(1, 3, 4, 5, 2, 2, 3, 4, 5, 5);

SELECT * FROM friend JOIN friend_responses ON friend_responses.friend_id = friend.friend_id;


SELECT * FROM friend;
SELECT * FROM friend_responses;