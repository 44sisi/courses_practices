from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/secret")
def index():
    return render_template("index.html", name=request.args.get("name", "world"))

# to run:
# export FLASK_APP=application.py OR set FLASK_APP=hello.py
# flask run
