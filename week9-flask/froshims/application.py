from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

# conn = sqlite3.connect("froshims.db")
# with conn:
#     c = conn.cursor()

SPORTS = [
    "Dodgeball",
    "Flag Football",
    "Soccer",
    "Volleyball",
    "Ultimate Frisbee"
]


@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)


@app.route("/register", methods=["POST"])
def register():
    # if not request.form.get("inputname") or request.form.getlist("sport") not in SPORTS:
    # if not request.form.get("inputname") or request.form.get("sport") not in SPORTS:
    #     return render_template("failure.html")
    # return render_template("success.html")
    registered_name = request.form.get("inputname")
    sport = request.form.get("sport")
    if not registered_name:
        return render_template("error.html", message="Missing Name")
    if not sport:
        return render_template("error.html", message="Missing Sport")
    if sport not in SPORTS:
        return render_template("error.html", message="Invalid Sport")

    with sqlite3.connect("froshims.db") as conn:
        c = conn.cursor()
        c.execute("INSERT INTO registrants (name, sport) VALUES(?, ?)",
                  (registered_name, sport))
    return redirect("/registrants")


@app.route("/registrants")
def registrants():
    with sqlite3.connect("froshims.db") as conn:
        conn.row_factory = sqlite3.Row
        c = conn.cursor()
        registrant_db_rows = c.execute("SELECT * FROM registrants")
        print(c.fetchall())
    return render_template("registrants.html", registrants=registrant_db_rows)
