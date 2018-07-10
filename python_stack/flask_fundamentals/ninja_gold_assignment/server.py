from flask import Flask, render_template, session, request,redirect
import random
app = Flask(__name__)
app.secret_key = "earnmoneyninja"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/earn", methods=['POST'])
def earn():
    session['earnings'] = 0
    session['activity'] = request.form["activity"]
    today = request.form['activity']
    if today == "Farm":
        earns = random.randint(10,21)
    elif today == "Cave":
        earns = random.randint(5,11)
    elif today == "House":
        earns = random.randint(2,6)
    elif today == "Casino":
        earns = random.randint(-50,51)
    else:
        earns = 0
    session['earnings'] += earns
    return redirect('/')    
