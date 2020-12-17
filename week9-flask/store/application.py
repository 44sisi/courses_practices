import sqlite3
from flask import Flask, redirect, render_template, request, session
from flask_session import Session

# Configure app
app = Flask(__name__)

# Configure sessions
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/")
def index():
    with sqlite3.connect("store.db") as conn:
        conn.row_factory = sqlite3.Row
        db = conn.cursor()
        db.execute("SELECT * FROM books")
        books = db.fetchall()
    return render_template("books.html", books=books)


@app.route("/cart", methods=["GET", "POST"])
def cart():

    # Ensure cart exists
    if "cart" not in session:
        session["cart"] = []

    # POST
    if request.method == "POST":
        id = request.form.get("id")
        if id:
            session["cart"].append(id)
        return redirect("/cart")

    # GET
    with sqlite3.connect("store.db") as conn:
        conn.row_factory = sqlite3.Row
        db = conn.cursor()

        args = session["cart"]
        sql = "SELECT * FROM books WHERE id IN ({seq})".format(
            seq=','.join(['?']*len(args)))
        db.execute(sql, args)
        books = db.fetchall()
        print(books[0])
    return render_template("cart.html", books=books)
