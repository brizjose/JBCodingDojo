from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import md5
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "regisvalid1234"
mysql = MySQLConnector(app,'message_wall_assignment')

@app.route('/')
def index():
    if "user_id" in session:
        return redirect('/welcome')
    else:
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
        'pword':md5.new(request.form['pword']).hexdigest()
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
            password = md5.new(request.form['pword']).hexdigest()
            #validate password by comparing with input with that in the db
            if password == users[0]['password']:
                session['user_id'] = user['id']
                #flash("Succesful login, user id:{}".format(session['user_id']))
                return redirect('/welcome')
            else:
                flash("Please check credentials") 
        #if user does not exist        
        else:
            flash("Email does not exist")        
        return redirect('/')

@app.route('/welcome')
def welcome():
    query = "SELECT * FROM users WHERE id = :logged_id"
    data = {
        'logged_id':session['user_id']
    }
    session['logged_user'] = mysql.query_db(query,data)[0]['first_name']
    message_query = "SELECT CONCAT_WS(' ', users.first_name, users.last_name) AS Posted_by, users.id AS Posted_by_id, messages.message AS Message, messages.id AS Message_id, messages.updated_at AS Date_and_Time FROM users JOIN messages ON users.id = messages.user_id;"
    messages = mysql.query_db(message_query)
    return render_template("wall.html", logged_user=session['logged_user'], all_messages=messages)

@app.route('/messages', methods=['POST'])
def post_message():
    if "user_id" not in session:
        return redirect('/')
    query = "INSERT INTO `messages` (`message`, `user_id`, `created_at`, `updated_at`) VALUES (:message, :user, now(), now());"
    data = {
        'message':request.form['message'],
        'user':session['user_id']
    }
    message = mysql.query_db(query,data)
    return redirect('/welcome')

@app.route('/comment/<message_id>', methods=['POST'])
def post_comment(message_id):
    if "user_id" not in session:
        return redirect('/')
    query = "INSERT INTO `comments` (`comment`, `user_id`, `message_id`, `created_at`, `updated_at`) VALUES (:comment, :user, :message, now(), now());"
    data = {
        'comment':request.form['comment'],
        'user':session['user_id'],
        'message':message_id
    }
    comment = mysql.query_db(query,data)
    return render_template('wall.html', comment=comment, logged_user=session['logged_user'])

#LOGOUT
@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return redirect('/')


app.run(debug=True)