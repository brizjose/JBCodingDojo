from flask import Flask, render_template, session, redirect
app = Flask(__name__)
app.secret_key = "rencreepy"

@app.route("/")
def index():
    #if count already exists, add 1, else, create a count starting with 1
    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 1
    #initialize an empty array once
    if "names" not in session:
        session["names"] = []
    session["names"].append("Namae Wa!")
    #can also create dictionaries
    if "contacts" not in session:
        session["contacts"] = []
    session["contacts"].append({"name":"Ruppert", "property":"vacant lot"})

    return render_template("index.html", count = session['count'], names = session['names'], contacts = session['contacts'])

@app.route("/clear")
def clearSession():
    session.clear()
    return redirect("/")

app.run(debug=True)