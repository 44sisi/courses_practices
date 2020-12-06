.mode csv 
.import "Favorite TV Shows - Form Responses 1.csv" shows
.schema 
SELECT * FROM shows;
.save shows.db  