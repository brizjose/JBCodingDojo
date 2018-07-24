from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "regisvalid1234"
mysql = MySQLConnector(app, 'users')

#print mysql.query_db("SELECT * FROM users")

@app.route('/')
def index():
    return render_template("index.html")


#REGISTRATION
@app.route('/register', methods=['POST'])
def register():
    return "got to register"
    #receive data
        #validate data
            #valid
                #store it, send it to database
                    #flash a success message
            #not valid
                #flash error message
            #redirect to index

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