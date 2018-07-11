from flask import Flask, render_template, session, flash, request, redirect
import re

email_regex = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = "validation"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/user', methods=['POST'])
def user():
    #validations
    if len(request.form['first_name']) < 2:
        flash("Enter full name", 'error')
    if len(request.form['last_name']) < 2:
        flash("Enter full last name", 'error')
    if len(request.form['password']) < 8:
        flash("Password minimum is 8 characters", 'security')
    if not email_regex.match(request.form['email']):
        flash("Invalid email address!", 'error')
    if request.form['password'] != request.form['confirm_password']:
        flash("Passwords don't match", 'error')
    if "_flashes" in session:
        return redirect("/")
    #end validations
    name = "{} {}".format(request.form['first_name'], request.form['last_name'])
    email = request.form['email']
    return render_template('user.html',name=name,email=email)
app.run(debug=True)