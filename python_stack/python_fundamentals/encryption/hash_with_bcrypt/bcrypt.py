from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
#import bcrypt
from flask.ext.bcrypt import Bcrypt

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
#create the bcrypt object
bcrypt = Bcrypt(app)
app.secret_key = "regisvalid1234"
mysql = MySQLConnector(app,'the_wall')
@app.route('/')
def index():
    return render_template("index.html")

#REGISTRATION
@app.route('/register', methods=['POST'])
def register():    
    #receive data
    #validate data
    valid = True
    #if not valid
    #flash error message and redirect to index
    if len(request.form['fname']) < 1:
        valid = False
        flash("Please enter a full first name")
    if len(request.form['lname']) < 1:
        valid = False
        flash("Please enter a full last name")
    if len(request.form['email']) < 5:
        valid = False
        flash("Please enter a full email")
    if not EMAIL_REGEX.match(request.form['email']):
        valid = False
        flash("Invalid email address!")
    if len(request.form['pword']) < 8:
        valid = False        
        flash("Please make password at least 8 characters long")
    if valid != True:
        return redirect ('/')
    #if valid
    #create query 
    query = "INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (:fname, :lname, :email, :pword, now(), now());"
    #build dictionary with form data
    data = {
        'fname':request.form['fname'],
        'lname':request.form['lname'],
        'email':request.form['email'],
        'pword':bcrypt.generate_password_hash(request.form['pword'])
    }   
    #store it to db
    mysql.query_db(query,data)
    #flash success message
    flash("Successfully registered!")
    return redirect('/')

#LOGIN
@app.route('/login', methods=['POST'])
def login():
    #receive data
    #validate data
    valid = True
    #if not valid
    #flash error message and redirect to index    
    if len(request.form['email']) < 5:
        valid = False
        flash("Please enter a full email")
    if not EMAIL_REGEX.match(request.form['email']):
        valid = False
        flash("Invalid email address!")
    if len(request.form['pword']) < 8:
        valid = False        
        flash("Please make password at least 8 characters long")
    if valid != True:
        return redirect ('/')        
    #valid
    else:
        #create query    
        query = "SELECT * FROM users WHERE email = :email"
        #build dictionary
        data = {
            'email':request.form['email']
        }
        #get user information from database
        users = mysql.query_db(query,data)
        #validate credentials
        #if user exists, db will return a dictionary with the information
        if len(users) > 0:
            user = users[0]
            password = request.form['pword']
            bcrypt.check_password_hash(users[0]['password'], password)
            #validate password by comparing with input with that in the db
            if password == users[0]['password']:
                session['user_id'] = user['id']
                flash("Succesful login, user id:{}".format(session['user_id']))
                return render_template('wall.html')
            else:
                flash("Please check credentials") 
        #if user does not exist        
        else:
            flash("Email does not exist")        
        return redirect('/')

@app.route('/welcome')
def welcome():
    user = mysql.query_db("SELECT * FROM users WHERE id = {}".format(session['user_id']))[0]
    return render_template("wall.html", user=user)

app.run(debug=True)