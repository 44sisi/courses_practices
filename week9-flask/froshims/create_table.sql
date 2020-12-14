.open froshims.db

CREATE TABLE registrants (
    id INTEGER, 
    name TEXT NOT NULL, 
    sport TEXT NOT NULL, 
    PRIMARY KEY(id)
);

ALTER TABLE registrants
ADD email varchar(255);