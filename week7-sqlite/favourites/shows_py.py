import sqlite3
import csv

# create empty db
open("shows_py.db", "w").close()

# create connection to sqlite3 db
conn = sqlite3.connect("shows_py.db")

with conn:
    c = conn.cursor()

    # create shows table
    sql_create_shows = """ CREATE TABLE shows (
                                id INTEGER, 
                                title TEXT,
                                PRIMARY KEY(id)
                           );"""
    c.execute(sql_create_shows)

    # create genres table
    sql_create_genres = """ CREATE TABLE genres (
                                show_id INTEGER, 
                                genre TEXT,
                                FOREIGN KEY(show_id) REFERENCES shows(id)
                            );"""
    c.execute(sql_create_genres)

    # insert into shows
    with open("Favorite TV Shows - Form Responses 1.csv", "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            title = row["title"].strip().upper()
            c.execute("INSERT INTO shows (title) VALUES(?);", (title,))

    # insert into generes
            key = c.lastrowid
            for genre in row["genres"].split(", "):
                c.execute(
                    "INSERT INTO genres (show_id, genre) VALUES(?, ?);", (key, genre,))
