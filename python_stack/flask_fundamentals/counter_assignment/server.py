from flask import Flask, session, render_template, redirect
app = Flask(__name__)
app.secret_key = "crypticdecript"  #we create a secret key to encrypt data and provide some security

@app.route("/")
def index():
    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 1
    
    return render_template("index.html", count=session['count'])

@app.route("/clear")
def clearSession():
    session.clear()
    return redirect("/")

app.run(debug=True)

