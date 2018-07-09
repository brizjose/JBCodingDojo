from flask import Flask, session, render_template, request,redirect
app = Flask(__name__)
app.secret_key = "crypticdecript"  

@app.route("/")
def index():
    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 1
    if session["count"] > 1:
        image = "friendly.png"
    else:
        image = "scary.jpg"
    return render_template("counter.html", count=session['count'], image=image)

@app.route("/clear")
def clearSession():
    session.clear()
    return redirect("/")

app.run(debug=True)

