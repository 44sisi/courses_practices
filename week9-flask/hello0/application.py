from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", showname=request.args.get("inputname", "world"))

# to run:
# export FLASK_APP=application.py OR set FLASK_APP=application.py
# flask run
