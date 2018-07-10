from flask import Flask, render_template, session, request, redirect
import random
app = Flask(__name__)
app.secret_key = "earnmoneyninja"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/earn", methods=['POST'])
def earn():
    session['earnings'] = 0
    session['activity'] = []
    if request.form['activity'] == "Farm":
        earns = random.randint(10,21)
        session['activity'].append("Farm")
    elif request.form['activity'] == "Cave":
        earns = random.randint(5,11)
        session['activity'].append("Cave")
    elif request.form['activity'] == "House":
        earns = random.randint(2,6)
        session['activity'].append("House")
    elif request.form['activity'] == "Casino":
        earns = random.randint(-50,51)
        session['activity'].append("Casino")
    else:
        earns = 0
    session['earnings'] += earns
    return redirect('/')    

app.run(debug=True)