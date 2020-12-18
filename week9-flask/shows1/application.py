# Searches for shows

import sqlite3
from flask import Flask, jsonify, render_template, request

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
        rows = c.fetchall()
        # shows = []
        # for row in rows:
        #     shows.append(list(row))
        shows = [dict(zip([column[0] for column in c.description], row))
                 for row in rows]
    return jsonify(shows)
