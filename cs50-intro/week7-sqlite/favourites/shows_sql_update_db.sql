.open shows_sql.db

INSERT INTO shows (Timestamp, title, genres) 
VALUES ("now", "The Muppet Show", "Comedy, Musical");

UPDATE shows SET genres = "Comedy, Drama, Musical"
WHERE title = "The Muppet Show";

SELECT * FROM shows WHERE title LIKE "%Muppet%";
