from flask import Flask, render_template, request

app = Flask(__name__)

REGISTRANTS = {}

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
    name = request.form.get("inputname")
    sport = request.form.get("sport")
    if not name:
        return render_template("error.html", message="Missing Name")
    if not sport:
        return render_template("error.html", message="Missing Sport")
    if sport not in SPORTS:
        return render_template("error.html", message="iNVALID Sport")
    REGISTRANTS[name] = sport
    print(REGISTRANTS)
    return render_template("success.html")
