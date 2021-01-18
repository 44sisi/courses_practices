.mode csv 

-- import from csv to table called shows
.import "Favorite TV Shows - Form Responses 1.csv" shows
.schema 
SELECT * FROM shows;

-- save table to database called shows
.save shows_sql.db  