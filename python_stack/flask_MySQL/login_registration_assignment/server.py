from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import md5
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)

app.secret_key = "regisvalid1234"

mysql = MySQLConnector(app,'login_registration')

print mysql.query_db("SELECT * FROM users")

@app.route('/')
def index():
    return render_template("index.html")


#REGISTRATION
@app.route('/register', methods=['POST'])
def register():    
    #receive data
    print request.form  
        #validate data
    valid = True
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
            #valid
    query = "INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (:fname, :lname, :email, :pword, now(), now());"
    data = {
        'fname':request.form['fname'],
        'lname':request.form['lname'],
        'email':request.form['email'],
        'pword':md5.new(request.form['pword']).hexdigest()
    }   
    mysql.query_db(query,data)
    flash("Successfully registered!")
    return redirect('/')
                #store it, send it to database
                    #flash a success message
            #not valid
                #flash error message
            #redirect to index

#LOGIN
@app.route('/login', methods=['POST'])
def login():
    #receive data
        #validate data
    valid = True
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
        query = "SELECT * FROM users WHERE email = :email"
        data = {
            'email':request.form['email']
        }
        users = mysql.query_db(query,data)
        if len(users) > 0:
            user = users[0]
            password = md5.new(request.form['pword']).hexdigest()
            if password == users[0]['password']:
                session['user_id'] = user['id']
                flash("Succesful login, user id:{}".format(session['user_id']))
            else:
                flash("Please check credentials") 
        else:
            flash("Email does not exist")
    return redirect('/welcome')

@app.route('/welcome')
def welcome():
    user = mysql.query_db("SELECT * FROM users WHERE id = {}".format(session['user_id']))[0]
    return render_template("welcome.html", user=user)

app.run(debug=True)