from flask import Flask, session, render_template, redirect
app = Flask(__name__)
app.secret_key = "crypticdecript"  #we create a secret key to encrypt data and provide some security

@app.route("/")
def index():
    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 1
    if session["count"] > 1:
        image = 'friendly.png'
    else:
        image = 'scary.jpg'
    return render_template("index.html", count=session['count'], image=image)

@app.route("/clear")
def clearSession():
    session.clear()
    return redirect("/")

app.run(debug=True)

