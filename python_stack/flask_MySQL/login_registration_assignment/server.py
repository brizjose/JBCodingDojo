from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "regisvalid1234"
mysql = MySQLConnector(app, 'users')

#print mysql.query_db("SELECT * FROM users")

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
    if len(request.form['pword']) < 8:
        valid = False        
        flash("Please make password at least 8 characters long")
    if valid != True:
        return redirect ('/')
            #valid
    query = "INSERT INTO `users`.`users` (`first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES (:fname, :lname, :email, :pword, NOW(), NOW());"
    data = {
        'fname':request.form['fname'],
        'lname':request.form['lname'],
        'email':request.form['email'],
        'pword':bcrypt.generate_password_hash(request.form['pword'])
    }   
    mysql.query_db = (query,data)
    flash("Successfully registered!")
    return redirect('/')
                #store it, send it to database
                    #flash a success message
            #not valid
                #flash error message
            #redirect to index
    return "got to register"

#LOGIN
@app.route('/login', methods=['POST'])
def login():
    return "got to login"
    #receive data
        #validate data
            #valid
                #check database for user
                    #if user
                        #check password
                            #if password match
                                #log them in
                            #else 
                                #error message
                    #else
                        #error message
            #else
                #error message


app.run(debug=True)