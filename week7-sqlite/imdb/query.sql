.open shows_imdb.db
.timer ON


-- drop index
DROP INDEX IF EXISTS title_index;
DROP INDEX IF EXISTS person_index;
DROP INDEX IF EXISTS show_index;
DROP INDEX IF EXISTS name_index; 


-- find show without index
SELECT * FROM shows WHERE title = "The Office";

-- find show with index
CREATE INDEX title_index ON shows (title);
SELECT * FROM shows WHERE title = "The Office";


-- find all shows of a person without index
SELECT title 
FROM people
JOIN stars ON people.id = stars.person_id
JOIN shows ON stars.show_id = shows.id
WHERE name = "Steve Carell";

-- find all shows of a person with index
CREATE INDEX person_index ON stars (person_id);
CREATE INDEX show_index ON stars (show_id);
CREATE INDEX name_index ON people (name);
SELECT title 
FROM people
JOIN stars ON people.id = stars.person_id
JOIN shows ON stars.show_id = shows.id
WHERE name = "Steve Carell";