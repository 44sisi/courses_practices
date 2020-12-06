.open shows_py.db

-- find show titles with genre = Musical
SELECT title FROM shows 
WHERE id IN (SELECT show_id FROM genres WHERE genre = "Musical");

-- find genres of "the office"
SELECT DISTINCT(genre) FROM genres
WHERE show_id IN (SELECT id FROM shows WHERE title = "THE OFFICE")
ORDER BY genre;

