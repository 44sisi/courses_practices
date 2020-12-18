# Searches for shows

import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/search")
def search():
    with sqlite3.connect("shows.db") as conn:
        conn.row_factory = sqlite3.Row
        c = conn.cursor()
        c.execute("SELECT * FROM shows WHERE title LIKE ?",
                  ("%" + request.args.get("q") + "%",))
        shows = c.fetchall()
    return render_template("search.html", shows=shows)
