import sqlite3
from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message
import os


app = Flask(__name__)
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config["MAIL_PORT"] = 587
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
mail = Mail(app)


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
    registered_name = request.form.get("inputname")
    registered_email = request.form.get("inputemail")
    sport = request.form.get("sport")
    if not registered_name:
        return render_template("error.html", message="Missing Name")
    if not registered_email:
        return render_template("error.html", message="Missing Email")
    if not sport:
        return render_template("error.html", message="Missing Sport")
    if sport not in SPORTS:
        return render_template("error.html", message="Invalid Sport")

    with sqlite3.connect("froshims.db") as conn:
        c = conn.cursor()
        c.execute("INSERT INTO registrants (name, email, sport) VALUES(?, ?, ?)",
                  (registered_name, registered_email, sport))

    message = Message("You are registered!", recipients=[registered_email])
    mail.send(message)

    return redirect("/registrants")


@app.route("/registrants")
def registrants():
    with sqlite3.connect("froshims.db") as conn:
        conn.row_factory = sqlite3.Row
        c = conn.cursor()
        c.execute("SELECT * FROM registrants")
        registrant_db_rows = c.fetchall()
    return render_template("registrants.html", registrants=registrant_db_rows)
