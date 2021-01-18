from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/greet")
def greet():
    return render_template("greet.html", showname=request.args.get("inputname", "world"))

# to run:
# export FLASK_APP=application.py
# flask run