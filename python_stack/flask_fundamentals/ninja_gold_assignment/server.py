from flask import Flask, render_template, session, request, redirect
import random
app = Flask(__name__)
app.secret_key = "earnmoneyninja"

@app.route("/")
def index():
    session['earnings'] = 0
    session['activity'] = []
    session['messages'] = []
    return render_template("index.html")

@app.route("/earn", methods=['POST'])
def earn():
    print request.form['activity']
    if request.form['activity'] == "Farm":
        earns = random.randint(10,20)
        session['activity'].append("Farm")
    elif request.form['activity'] == "Cave":
        earns = random.randint(5,10)
        session['activity'].append("Cave")
    elif request.form['activity'] == "House":
        earns = random.randint(2,5)
        session['activity'].append("House")
    elif request.form['activity'] == "Casino":
        earns = random.randint(-50,50)
        session['activity'].append("Casino")
    else:
        earns = 0
    session['earnings'] += earns
    message = "Earned {} golds from the {}!".format(earns,request.form['activity'])
    session['messages'].append(message)
    return render_template("index.html", earnings=session['earnings'], messages=session['messages'], earns=earns)    

app.run(debug=True)