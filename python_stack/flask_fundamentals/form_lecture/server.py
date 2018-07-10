from flask import Flask, render_template, request, redirect, session, flash
 
app=Flask(__name__)
app.secret_key = "awesomesecret"

@app.route("/")
def hello():
    if 'users' not in session:
            session['users'] = []
            session['counter'] = 0
    
    return render_template('index.html')

@app.route("/user", methods=['POST'])
def addUser():
    user = {
        "first_name": request.form['fname'],
        "last_name": request.form['lname'],
        "email": request.form['email'],
        "id": request.form['counter']
    }

    #validation example:

    if len(user['first_name']) < 2:
        flash("First name must be longer than one character")
    
    if len(user['last_name']) < 2:
        flash("Last name must be longer than one character")

    #check to see if there have been flashes in the session:

    if "_flashes" in session:
        return redirect("/")

    #handling of variables:

    session['user'] = user
    session['counter'] += 1
    print session['user']['first_name']
    session['users'].append(user)
    print session['users']
    return redirect("/")

@app.route("/user/<id>")
def showUser(id):
    for user in session['users']:
        if user['id'] == id:
            one_user = user
    return render_template('user.html', user=one_user)

@app.route("/clear")
def clearSession():
    session.clear()
    return redirect("/")

app.run(debug=True, port=8888 )