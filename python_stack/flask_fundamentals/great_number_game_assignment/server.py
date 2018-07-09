from flask import Flask, render_template, session, redirect, request
import random
app = Flask(__name__)
app.secret_key = "randnum"

@app.route('/', methods=['GET','POST'])
def generate():
    session['num'] = random.randint(1,101)
    number = session['num']
    print "number is {}".format(number)
    return redirect('/play')

@app.route('/play', methods=['GET','POST'])
def gameStart():
    return render_template("game.html")

@app.route('/compare', methods=['POST'])
def compareNums():
    guess = request.form['guess']
    print "guess is {}".format(guess)
    if session['num'] == int(guess):
        return render_template("yay.html")
    elif session['num'] > int(guess):
        print "number is {} type is{}".format(session['num'],type(session['num']))
        print "guess is {} type is{}".format(guess, type(guess))
        return render_template("game.html", msg = "Too low")
    elif session['num'] < int(guess):
        print "number is {} type is{}".format(session['num'],type(session['num']))
        print "guess is {} type is{}".format(guess, type(guess))
        return render_template("game.html", msg = "Too high")
    else:
        print "number is {} type is{}".format(session['num'],type(session['num']))
        print "guess is {} type is{}".format(guess, type(guess))
        return render_template("game.html", msg = "Remember you have to guess a number from 1 to 100")

@app.route('/restart', methods=['POST'])
def gameStartOver():
    session.clear()
    return redirect('/')

app.run(debug=True)