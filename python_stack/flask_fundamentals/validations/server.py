from flask import Flask, render_template, redirect, request, session, flash
#re module let's us do expression operations
import re
#this object we are creating will check if email address has email syntax
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "safeKeeping"

@app.route('/')
def index():
    return render_template("index.html")

#flash messages exist for one redirect cycle. Similar to session, they can be accessed through embedded python tags {{}} & {%%}
@app.route("/name", methods=["POST"])
def name():
    if len(request.form["name"]) < 1:
        flash("Name cannot be empty!")
    else: 
        flash("Success! your name is {}".format(request.form['name']))
    return redirect("/")

#.match method returns None of there is no match
@app.route("/email", methods=["POST"])    
def email():    
    if len(request.form["email"]) < 5:
        flash("Email cannot be empty!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email address!")
    else: 
        flash("Success! Your email is {}".format(request.form['email']))
    return redirect("/")

app.run(debug=True)

#other validation methods --search python docs for details--:
#str.alpha() - returns boolean after checking if string is all alphabetic
#time.strptime(string,[format]) - within the time module (--import time--) changes a string to a time using the given format    